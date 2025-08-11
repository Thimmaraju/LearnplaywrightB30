import { test, expect } from '@playwright/test';


test("Based on Visible run different script", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

    const gallery = await page.locator('a[href="/gallery/"]')

    const portfolio = await page.locator('a[href="/portfolio/"]')

    if(await gallery.isVisible()){

        await gallery.click()

        await expect(page).toHaveURL('https://the-internet.herokuapp.com/gallery/')
    }
    else{

        await portfolio.click()

         await expect(page).toHaveURL('https://the-internet.herokuapp.com/portfolio/')
    }

})