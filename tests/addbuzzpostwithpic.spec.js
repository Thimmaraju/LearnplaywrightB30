const { test, expect } = require('@playwright/test');

test.describe('Add Buzz Post with Picture', () => {
    test('should add a new buzz post with a picture', async ({ page }) => {
        // TODO: Implement test steps
        await page.goto('https://your-app-url.com/login');
        await page.fill('input[name="username"]', 'Admin');
        await page.fill('input[name="password"]', 'admin123');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL(/dashboard|home/);
         
    });
});