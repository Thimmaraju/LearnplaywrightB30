import { test, expect } from '@playwright/test';

//const credentials = ["Admin", "admin123"]

const creds = {

    username: "Admin",
    password : "admin123"
}

test('Verify login with Valid Credentials', async ({ page }) => {

    //actions 
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(creds.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);
  await page.getByRole('button', { name: 'Login' }).click();

  //Verification 
  //Assertions 
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible(); // 5 sec 

  await expect(page).toHaveURL('/web/index.php/dashboard/index')

  await expect(page.locator('ul.oxd-main-menu')).toBeVisible() // Menut  Items 
});


test('Verify Login with Valid Username and Invalid Password', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('gferjhrhiu');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify Login with Invalid Username and valid Password', async ({ page }) => {

  let password = "admin123"
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('dfskhkjhrn');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('Verify Login with Invalid Username and Invalid Password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('dfskhkjhrn');
  await page.getByRole('textbox', { name: 'Password' }).fill("dskfgvn");
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});