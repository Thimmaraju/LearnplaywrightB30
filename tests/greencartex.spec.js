const { test, expect } = require('@playwright/test');

test.describe('GreenCarTex Tests', () => {
    test('should do something', async ({ page }) => {
     

        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

        const price1 = await page.locator('(//p[@class="product-price"])[1]').textContent()

        console.log(price1)
    });
});