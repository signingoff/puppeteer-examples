const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({timeout: 100000});
  const page=await browser.newPage();
  await page.goto('https://www.aicoin.net.cn',{waitUntil:'networkidle2'});
  await page.waitFor(500);

  await page.screenshot({path:'C:\\page.png',format:'A4', fullPage: true });  
  await browser.close();
})();