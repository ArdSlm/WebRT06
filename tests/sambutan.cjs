const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
const message = '"Assalamualaikum Wr. Wb. Sampurasun. Selamat datang di portal informasi resmi warga RT 006 Warung Cikopi. Platform digital ini hadir sebagai media informasi, pelayanan, dan komunikasi warga untuk mewujudkan transparansi kegiatan pembangunan di lingkungan kita. Mari bersama mewujudkan lingkungan aman, nyaman, dan rukun melalui kepedulian gotong royong."';
(async()=>{
  const browser = await chromium.launch({channel:'chrome'});
  try {
    const page = await browser.newPage();
    const errors=[]; page.on('pageerror',e=>errors.push(e.message));
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:8089',{waitUntil:'networkidle'});
    for(const width of [320,390,768,1366]) {
      await page.setViewportSize({width,height:1000});
      await page.locator('#sambutan').scrollIntoViewIfNeeded();
      await page.waitForTimeout(1700);
      const state=await page.locator('#sambutan').evaluate(section=>{
        const message=section.querySelector('.sambutan-message'), quote=section.querySelector('.sambutan-closing');
        const style=getComputedStyle(message);
        return {message:message.textContent.trim(),quote:[...quote.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join(''),order:!!(message.compareDocumentPosition(quote)&Node.DOCUMENT_POSITION_FOLLOWING),color:style.color,font:style.fontFamily,italic:style.fontStyle,photo:section.querySelector('img').getAttribute('src'),bg:getComputedStyle(section).backgroundImage,overflow:document.documentElement.scrollWidth>innerWidth};
      });
      assert.equal(state.message,message);
      assert.equal(state.quote,'Sanajan béda imah jeung béda carita, urang tetep ngahiji dina rasa duduluran.');
      assert.ok(state.order); assert.equal(state.color,'rgb(41, 57, 46)'); assert.ok(state.font.includes('Manrope')); assert.equal(state.italic,'normal');
      assert.equal(state.photo,'assets/img/pak-rt.png'); assert.ok(state.bg.includes('warga-pos-kamling-')); assert.equal(state.overflow,false);
      await page.screenshot({path:path.join(os.tmpdir(),`sambutan-polish-${width}.png`)});
      console.log('PASS exact copy/order/typography/assets/overflow',width);
    }
    await page.emulateMedia({reducedMotion:'reduce'}); await page.reload({waitUntil:'networkidle'}); await page.locator('#sambutan').scrollIntoViewIfNeeded();
    assert.equal(await page.locator('.sambutan-closing').evaluate(e=>e.getAnimations().length),0);
    assert.deepEqual(errors,[]); console.log('PASS reduced motion; no JavaScript errors');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
