const {test, expect, request} = require('@playwright/test')
const {ApiUtils} = require('./Util/ApiUtils')
let token;
const payload = {userEmail: "prabhat@gmail.com", userPassword: "Prabhat@1"}

test.beforeAll(async() => {
    const apirequest =  await request.newContext();
    const apiUtil = new ApiUtils(apirequest);
    token = await apiUtil.getToken(payload);
})


test.only('client app testing', async ({page}) => {

//    await  page.goto('https://rahulshettyacademy.com/client');
//    await  page.locator("#userEmail").fill("prabhat@gmail.com");
//    await  page.locator("#userPassword").fill("Prabhat@1");
//    await  page.locator("#login").click();
   //await page.waitForLoadState("networkidle")
    page.addInitScript(value => {
    window.localStorage.setItem('token' , value)
   }, token);
   await  page.goto('https://rahulshettyacademy.com/client');

   await page.locator(".card-body b").first().waitFor();
     console.log(await page.locator(".card-body b").allTextContents());
})

test('page switch context', async ({browser}) => {
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
await expect(username).toHaveValue(name); // for any text field to check values we can use 
// to have value , Incase of div having text we can use to contain text
})

