import { test, expect } from '@playwright/test';

test("Login as Standard User swag Labs", async ({page}) =>{

    test.slow()
    await page.goto('https://www.saucedemo.com/v1/index.html')

    await page.locator("//input[@data-test='usernameraju']").fill('standard_user')

    await page.locator("//input[@data-test='password']").fill('secret_sauce')

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html', {timeout: 60000})



})