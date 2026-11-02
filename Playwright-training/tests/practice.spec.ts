import { chromium, expect, test } from '@playwright/test';

test('Learning browser actions', async({})=>{
    const browserEngine = await chromium.launch({channel: 'msedge', headless: false});
    const browserContext = await browserEngine.newContext();
    await browserContext.clearCookies();
    const page = await browserContext.newPage();
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    await page.goto("https://playwright.dev/");
    await page.goBack();
    await page.goForward();
    await page.reload();
    const page2 = await browserContext.newPage();
    await page.goto("https://www.selenium.dev/");
    await page.bringToFront();
    const currenturl = await page.url();
    console.log(currenturl); 

     await page.close();
     await browserContext.close();
     await browserEngine.close();
});
