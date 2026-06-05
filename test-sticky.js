const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  await page.setViewport({ width: 1352, height: 760 });
  await page.goto('http://localhost:3000');
  
  await page.waitForSelector('[data-pillar-id="premium-design"]');
  
  const rects = await page.evaluate(() => {
    const leftCol = document.querySelector('.lg\\:col-span-7');
    const rightCol = document.querySelector('.lg\\:col-span-5');
    const stickyEl = rightCol.querySelector('.sticky');
    const grid = leftCol.parentElement;
    
    return {
      leftCol: leftCol.getBoundingClientRect(),
      rightCol: rightCol.getBoundingClientRect(),
      stickyEl: stickyEl.getBoundingClientRect(),
      grid: grid.getBoundingClientRect()
    };
  });
  
  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
