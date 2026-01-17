const {test, expect} = require("@playwright/test")
import {faker} from '@faker-js/faker'
const {DateTime} = require("luxon")
const getAllProducts = require("./testData/get-all-products.json");

let token;

test('login', async({request}) => {
   const apiResponse =  await request.post("api/ecom/auth/login",
        {
            data: {
                "userEmail": "prabhat@gmail.com",
                "userPassword": "Prabhat@1"
            },
            headers: {
                'content-type':'application/json'
            }
        }
    )
  const response = await apiResponse.json();
  token = response.token;
  expect(apiResponse.ok).toBeTruthy();
  console.log(response);
})

test('get all products', async({request})=> {
  const apiResponse =  await request.post('api/ecom/product/get-all-products',
    { 
            data : getAllProducts ,
    headers: {
        'Authorization': token
    }
})
   const response = await apiResponse.json();
   expect(response.data.map(p => p.productName)).toContain('iphone 13 pro')
    expect(response.data.map(p => p.productName)).toContain('ADIDAS ORIGINAL')

//    expect(response.data[0]).toHaveProperty("productName","ADIDAS ORIGINAL")
//    expect(response.data[2]).toHaveProperty("productName",'iphone 13 pro')
   console.log(response);

})


