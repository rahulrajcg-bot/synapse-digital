const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:8888', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ 
    path: '/home/ubuntu/.openclaw/workspace/synapse-digital/screenshot.png',
    fullPage: true 
  });
  
  console.log('Screenshot saved!');
  await browser.close();
})();
