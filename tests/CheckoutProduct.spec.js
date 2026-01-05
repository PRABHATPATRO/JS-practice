const {test, expect} = require("@playwright/test");

test('End to End product checkout', async ({page}) => {
    const product = "ADIDAS ORIGINAL";
    await page.goto('https://rahulshettyacademy.com/client');
   await  page.locator("#userEmail").fill("prabhat@gmail.com");
   await  page.locator("#userPassword").fill("Prabhat@1");
   await  page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    page.locator('div.card-body b').first().waitFor();
   let list = page.locator('div.card-body');
   const count = await list.count();
   console.log("count = " + count);
    for(let i=0; i< count; i++)
    {
        if (await list.locator('b').nth(i).textContent() === product)
        {
            await list.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
   await  page.locator("[routerlink*='cart']").click();
   await  page.locator("div.cartSection").first().waitFor();
    const hasText = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(hasText).toBeTruthy();
   await page.locator('text=Checkout').click();
   await page.getByPlaceholder('Select Country').pressSequentially("Ind");
   const dropdown = await page.locator(".ta-results");
   await dropdown.waitFor();
   const buttons = dropdown.locator("button");
   const buttonsCount = await buttons.count();
   console.log("buttons count:", buttonsCount);
   for(let i=0; i < buttonsCount; i++)
   {
      if (await buttons.nth(i).textContent() === " India")
      {
        await buttons.nth(i).click();
        break;
      }
   }
     expect(await page.locator(".user__name [type='text']").first()).toHaveText("prabhat@gmail.com");
        await page.locator(".action__submit").click();
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
       const orderId =  await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        await page.locator("button[routerlink*='orders']").click();
         await page.locator("tbody").waitFor();
        let rows =   page.locator("tbody tr");
        let rowsCount = await rows.count();
        for(let i = 0; i<rowsCount; i++)
        {
              const rowOrder = await rows.nth(i).locator("th").textContent();
              if(rowOrder.includes(orderId))
              {
                 await rows.nth(i).locator(".btn-primary").click();
                break;
              }
        }

})