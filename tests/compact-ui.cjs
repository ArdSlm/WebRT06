const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const os=require('node:os');
(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  try {
    const page=await browser.newPage();
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:8089',{waitUntil:'domcontentloaded'});
    for(const [width,height] of [[360,800],[390,844],[430,932],[498,858],[1440,1000]]) {
      await page.setViewportSize({width,height});
      await page.locator('#kegiatan').scrollIntoViewIfNeeded(); await page.waitForTimeout(1400);
      const music=await page.locator('#music-toggle').boundingBox(),admin=await page.locator('#admin-floating-btn').boundingBox(),top=await page.locator('#back-to-top').boundingBox();
      assert.equal(music.x,admin.x);assert.ok(music.y+music.height<=admin.y);assert.ok(admin.x+admin.width<top.x);assert.ok(admin.y+admin.height<=height);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      if(width<768) assert.equal(await page.locator('.activity-card img').first().evaluate(e=>getComputedStyle(e).aspectRatio),'2 / 1');
      await page.screenshot({path:path.join(os.tmpdir(),`compact-ui-${width}.png`)});
      console.log('PASS icons, separation, image ratio, overflow',width,height);
    }
    await page.locator('#music-toggle').click();
    assert.equal(await page.evaluate(()=>rt06BackgroundMusic.paused),true);
    await page.locator('#music-toggle').click();
    await page.waitForFunction(()=>!rt06BackgroundMusic.paused && rt06BackgroundMusic.volume===.45);
    await page.locator('#admin-floating-btn').click();assert.ok(await page.locator('#adminModal').isVisible());
    assert.deepEqual(errors,[]);console.log('PASS music 45%, toggle, admin, no JS errors');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
