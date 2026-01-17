// @ts-check
const {test, expect} = require('@playwright/test');


test('first test', async function({browser}) {
const context = await browser.newContext();
const page = await context.newPage();
await page.once('load', () => {
    console.log("page loaded");
});
await page.goto("https://playwright.dev/");
await page.getByRole("link", {name:'Get started'}).click();
await expect(page.getByRole("heading", {name:'installation'})).toBeVisible();

});