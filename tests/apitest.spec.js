const { test, expect } = require('@playwright/test');

test('Search and verify T-shirt product', async ({ request }) => {


    const apiresponse = await request.get('https://reqres.in/api/users?page=2', {headers : {
        "x-api-key" : "reqres-free-v1"

    }});

   console.log(apiresponse)



})