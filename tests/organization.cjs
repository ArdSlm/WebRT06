// Run against a local static server; uses an existing Playwright installation.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:8089', { waitUntil: 'networkidle' });
    const expected = await page.evaluate(() => Object.entries(DATA_PENGURUS).map(([key, value]) => ({ key, role: value.roleName, names: [].concat(value.nama), task: value.tugas })));
    for (const person of expected) {
      const card = page.locator(`[data-role="${person.key}"]`);
      assert.equal(await card.locator('h3').textContent(), person.role);
      assert.deepEqual(await card.locator('li').allTextContents(), person.names);
      assert.equal(await card.locator('.org-duty p').textContent(), person.task);
    }
    const toggle = page.locator('#org-toggle'), panel = page.locator('#org-panel');
    for (const width of [320,390,430,768,1366]) {
      await page.setViewportSize({ width, height:900 });
      await page.locator('#pengurus').scrollIntoViewIfNeeded();
      assert.equal(await page.locator('#pengurus .org-card:visible').count(), 4);
      assert.deepEqual(await page.locator('.org-core [data-role]').evaluateAll(cards => cards.map(card => card.dataset.role)), ['ketua','wakilKetua','sekretaris','bendahara']);
      assert.equal(await page.locator('.org-administration [data-role]').count(), 2);
      assert.equal(await panel.locator('[data-role="wakilKetua"]').count(), 0);
      assert.equal(await panel.getAttribute('aria-hidden'), 'true');
      assert.equal(await panel.evaluate(e => e.inert), true);
      await page.screenshot({ path:path.join(os.tmpdir(), `organization-collapsed-${width}.png`) });
      await toggle.focus();
      await page.keyboard.press('Enter');
      await page.waitForTimeout(1500);
      assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
      assert.equal(await page.locator('#pengurus .org-card:visible').count(), expected.length);
      assert.equal(await panel.evaluate(e => e.style.height), 'auto');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.screenshot({ path:path.join(os.tmpdir(), `organization-expanded-${width}.png`) });
      await toggle.focus(); await page.keyboard.press('Space'); await page.waitForTimeout(500);
      assert.equal(await panel.isVisible(), false);
      assert.equal(await toggle.evaluate(e => e === document.activeElement), true);
      // Interrupt in-flight transitions without Playwright waiting for animations to settle.
      await page.evaluate(async () => {
        for(let i=0;i<8;i++) { document.getElementById('org-toggle').click(); await new Promise(r=>setTimeout(r,60)); }
      });
      await page.waitForTimeout(600);
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      assert.equal(await panel.isVisible(), false);
      console.log('PASS collapsed/expanded/keyboard/rapid-toggle/no-overflow', width);
    }
    await page.emulateMedia({ reducedMotion:'reduce' });
    await toggle.click();
    assert.equal(await panel.evaluate(e => e.style.height), 'auto');
    await page.setViewportSize({width:390,height:900});
    await page.locator('[data-role="wakilKetua"] summary').click();
    assert.ok(await page.locator('[data-role="wakilKetua"] .org-duty p').isVisible());
    await toggle.click();
    assert.equal(await panel.isVisible(), false);
    assert.deepEqual(errors, []);
    console.log('PASS all original data, task details, reduced motion, no JS errors');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
