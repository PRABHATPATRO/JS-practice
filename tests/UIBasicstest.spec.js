const {test,expect} = require ('@playwright/test');

// test('browser context test to check', async ({browser})=> {
//   const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//      await console.log( await page.title());
//      expect( await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
// })
// test('page specific Test', async ({ page }) => {
//     await page.goto('https://google.com');
//    console.log( await page.title());
//    expect(await page.title()).toBe('Google');
// })
test('UI locators test', async ({page}) => {
  let username = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await username.fill("prabhat");
  await page.locator("[type='password']").fill("learning");
  await page.locator('#signInBtn').click();
 console.log(await page.locator("[id='login-form'] div[style*=block]")
 .textContent());
 await expect(page.locator("[id='login-form'] div[style*=block]")).toContainText("Incorrect username/password.")

 //fill
 await username.fill("rahulshettyacademy")
 await username.fill("rahulshettyacademy")
 await page.locator("select[class='form-control']").selectOption("Consultant");
 await page.locator("[class = 'customradio']").first().click();
 await expect(page.locator("[class = 'customradio']").first()).toBeChecked();
  await page.locator("[class = 'customradio']").last().click()
  await page.locator("#okayBtn").click();
  await expect(page.locator("[class = 'customradio']").last()).toBeChecked();

 await page.locator("#signInBtn").click ()

// await expect (await page.locator(".card-body a").first().textContent()).toContain("iphone");
})
