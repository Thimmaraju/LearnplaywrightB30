import { test, expect } from '@playwright/test';

test('Submit and verify claim', async ({ page }) => {
    // Login credentials
    const username = 'Admin';
    const password = 'admin123';

    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Login
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Wait for dashboard to load
    await page.waitForLoadState('networkidle');
});
