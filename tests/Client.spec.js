const {test, expect} = require('@playwright/test')
test('client app testing', async ({page}) => {

   await  page.goto('https://rahulshettyacademy.com/client');
   await  page.locator("#userEmail").fill("prabhat@gmail.com");
   await  page.locator("#userPassword").fill("Prabhat@1");
   await  page.locator("#login").click();
   //await page.waitForLoadState("networkidle")
   await page.locator(".card-body b").first().waitFor();
     console.log(await page.locator(".card-body b").allTextContents());
})

test.only('page switch context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username");
    const link =  page.locator("a[href*='request']")

const [newPage] = await Promise.all ([
 context.waitForEvent('page'), // wait for new page, return promises
//pending, reject, fulfilled
  link.click() ]) // newPage is opened

const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@")[1];
const name = arrayText.split(" ")[0];
await username.fill(name);
await expect(username).toHaveValue(name);
})