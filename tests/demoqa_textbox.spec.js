const { test, expect } = require('@playwright/test');

// Configure tests to run only in Chrome
test.use({ browserName: 'chromium' });

test.describe('DemoQA Text Box Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the text box page before each test
        await page.goto('https://demoqa.com/text-box', { waitUntil: 'networkidle' });
        // Ensure the form is loaded and visible
        await page.waitForSelector('#userName', { state: 'visible' });
    });

    test('should submit form with valid data', async ({ page }) => {
        // Fill in the form with proper waits
        const userName = page.locator('#userName');
        const userEmail = page.locator('#userEmail');
        const currentAddress = page.locator('#currentAddress');
        const permanentAddress = page.locator('#permanentAddress');
        
        // Ensure all fields are visible and interactable
        await expect(userName).toBeVisible();
        await expect(userEmail).toBeVisible();
        await expect(currentAddress).toBeVisible();
        await expect(permanentAddress).toBeVisible();

        // Fill the form fields
        await userName.fill('John Doe');
        await userEmail.fill('johndoe@example.com');
        await currentAddress.fill('123 Main Street, City');
        await permanentAddress.fill('456 Park Avenue, Town');

        // Ensure submit button is visible and clickable
        const submitButton = page.locator('#submit');
        await submitButton.scrollIntoViewIfNeeded();
        await expect(submitButton).toBeVisible();
        await submitButton.click();

        // Wait for the output section to be visible
        const outputSection = page.locator('.border');
        await expect(outputSection).toBeVisible();
        
        // Verify the submitted data in output with proper waits
        await expect(page.locator('#output #name')).toContainText('Name:John Doe');
        await expect(page.locator('#output #email')).toContainText('Email:johndoe@example.com');
        await expect(page.locator('#output #currentAddress')).toContainText('Current Address :123 Main Street, City');
        await expect(page.locator('#output #permanentAddress')).toContainText('Permananet Address :456 Park Avenue, Town');
    });

    test('should show error for invalid email', async ({ page }) => {
        // Fill in the form with invalid email
        await page.fill('#userName', 'John Doe');
        await page.fill('#userEmail', 'invalid-email');
        await page.fill('#currentAddress', '123 Main Street, City');
        await page.fill('#permanentAddress', '456 Park Avenue, Town');

        // Submit the form
        await page.click('#submit');

        // Verify error state
        const emailField = page.locator('#userEmail');
        await expect(emailField).toHaveCSS('border-color', 'rgb(255, 0, 0)');
    });

    test('should submit form with only required fields', async ({ page }) => {
        // Fill only the name field
        await page.fill('#userName', 'John Doe');

        // Submit the form
        await page.click('#submit');

        // Verify the output contains only the name
        await expect(page.locator('#name')).toContainText('John Doe');
    });
});
