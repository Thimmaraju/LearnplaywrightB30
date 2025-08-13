const { test, expect } = require('@playwright/test');


test.describe('GreenCart Tests', () => {
    test('should load GreenCart homepage', async ({ page }) => {
      
     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const addToCartButtons = await page.locator("//button[text()='ADD TO CART']");
    const count = await addToCartButtons.count();
    for (let i = 0; i < count; i++) {
      await addToCartButtons.nth(i).click();
    }
    
    });
});