const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({timeout: 100000});
  const page=await browser.newPage();
  await page.goto('https://www.baidu.com',{waitUntil:'networkidle2'});
  await page.waitFor(500);
  var title = await page.title();
  console.log(title);
  browser.close();
})();