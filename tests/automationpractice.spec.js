const { test, expect } = require('@playwright/test');

test('Search and verify T-shirt product', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://www.automationpractice.pl/index.php');

    // Search for T-shirts using the search box
    await page.fill('#search_query_top', 'T-shirts');
    await page.click('button[name="submit_search"]');

    // Verify the specific T-shirt is present in the results
    const productTitle = await page.locator('.product-name').filter({ hasText: 'Faded Short Sleeve T-shirts' });
    await expect(productTitle).toBeVisible();
});
