
const { test, expect } = require('@playwright/test');

const creds = {

    url : 'https://register.rediff.com/register/register.php?FormName=user_details'
}

test('Check box example', async ({page}) => {

    await page.goto(creds.url)

    //ischecked()

   // await page.locator('input[type="checkbox"]').check()

    const checkboxstatus = await page.locator('input[type="checkbox"]').isChecked()

    console.log(checkboxstatus)

    if(checkboxstatus){

       await page.locator('input[type="checkbox"]').uncheck()
       console.log("Unchecked  the checkbox")

    }

    else{
        
        console.log("If block not Executed but esle is executed")
    }

     creds["firstname"] = "Raju"
     

})