const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');


test.describe('OrangeHRM Add Employee Test', () => {

    
const Employees  = {

    emp1: {

        firstName: "Raju",
        lastName: "Raju1225"
    },
    emp2: {

        firstName: "Chris",
        lastName: "Chris1225"
    },
    emp3: {

        firstName: "Yamuna",
        lastName: "Yamuna1225"
    },
    emp4: {

        firstName: "Lingaraj",
        lastName: "abc1225"
    }

}

for (emp in Employees){

      const { firstName, lastName } = Employees[emp];

        test(`should add a new employee successfully - ${firstName}`, async ({ page }) => {
        // Launch URL
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Wait for the page to load and elements to be visible
        await page.waitForLoadState('networkidle');
        await page.waitForSelector('input[placeholder="Username"]');
        
        // Login as Admin
        await page.locator('input[placeholder="Username"]').fill('Admin');
        await page.locator('input[placeholder="Password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();
        
        // Wait for dashboard to load
        await page.waitForSelector('.oxd-main-menu-item');
        
        // Navigate to PIM
        await page.locator('span').filter({ hasText: 'PIM' }).click();
    
        
        // Click Add Employee
       await page.locator("//a[text()='Add Employee']").click()
        

        
        // Generate random first and last names
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        console.log(firstName)
        console.log(lastName)
        
        // Fill employee details
        await page.getByPlaceholder('First Name').fill(`${firstName}`);
        await page.getByPlaceholder('Last Name').fill(`${lastName}`);
        

        // Click Save
        await page.locator('button[type="submit"]').click();
    
    });
}

});
