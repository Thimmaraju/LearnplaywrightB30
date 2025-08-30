import { test, expect } from '@playwright/test';

import data from "../../testData/redifaccountcreation.json"

test('Verify Add reddif account', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    await page.locator('//input[@placeholder="Enter your full name"]').type(data.fullname)

    await page.locator('//input[@placeholder="Enter Rediffmail ID"]').fill(data.redifid)

    await page.locator("//span[@id='toggle-password']").click()

    await page.getByRole("")

    // async function Typeatext(where, what){

    //    await page.locator("//input[@id="+where+"]'").pressSequentially(what)
    // }

   
    // await Typeatext("newpasswd", data,password)
    // await Typeatext("newpasswd1", data.password)

    await page.locator('//input[@id="newpasswd"]').fill(data.password)
    await page.locator('//input[@id="newpasswd1"]').fill(data.password)

    await page.locator('select[name^="DOB_Day"]').selectOption(data.day)

    await page.locator('select[name^="DOB_Month"]').selectOption(data.month)

    await page.locator('select[name^="DOB_Year"]').selectOption(data.year)

    await page.locator('//input[@value="f"]').check()


})

test("Login as Standard User", async ({page}) =>{

    await page.goto('https://www.saucedemo.com/v1/index.html')

    await page.locator("//input[@data-test='username']").fill('standard_user')

    await page.locator("//input[@data-test='password']").fill('secret_sauce')

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html', {timeout: 60000})



})