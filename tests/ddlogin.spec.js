import { test, expect } from '@playwright/test';

const logincreds = {

    creds1: {

        username: "Raju",
        password: "Raju@1225"
    },
    creds2: {

        username: "Chris",
        password: "Chris@1225"
    },
    creds3: {

        username: "Yamuna",
        password: "Yamuna@1225"
    },
    creds4: {

        username: "Lingaraj",
        password: "abc@1225"
    }

}

for (let user in logincreds) {

    const { username, password } = logincreds[user];

    test(`Verify Login with Valid Username and Invalid Password - ${username} `, async ({ page }) => {
        await page.goto('/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill(`${username}`);
        await page.getByRole('textbox', { name: 'Password' }).fill(`${password}`);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });

}
