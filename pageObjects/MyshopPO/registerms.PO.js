import { expect } from '@playwright/test';
exports.registerpage = class registerpage {
    constructor(page) {
        this.page = page
        //create ac
        this.signupmenu = page.locator('a[title="Log in to your customer account"]');
        this.emailInput = page.locator('#email_create')
        this.createbtn = page.locator('#SubmitCreate')

        this.createacsucccess = page.locator('//h1[text()="Create an account"]')
        //register
        this.titlebtn = page.locator('#id_gender1')
        this.firstnameinput = page.locator('(//input[@type="text"])[2]')
        this.lastnameInput = page.locator('(//input[@class="is_required validate form-control"])[2]')
        this.passwordInput = page.locator('input[name="passwd"]')
        this.selectday = page.locator('#days')
        this.selectmonth = page.locator('#months')
        this.selectyear = page.locator('#years')
        this.checkbox = page.locator('input[type="checkbox"]')
        this.registerbtn = page.locator('//span[text()="Register"]')

        this.registersuccess = page.locator('//h1[text()="My account"]')


    }
    async launchurl() {
        await this.page.goto('http://www.automationpractice.pl/index.php')
    }
    async navigatetosignup() {
        await this.signupmenu.click()
    }
    async emailcred(email) {
        await this.emailInput.fill(email)
        await this.createbtn.click()
    }
    async accreatesuccessmsg() {
        await expect(this.createacsucccess).toBeVisible()
    }
   
    async registerinput(firstname,lastname,password) {
         await this.titlebtn.check()
        await this.firstnameinput.fill(firstname)
         await this.lastnameInput.fill(lastname)
          await this.passwordInput.fill(password)
    }
    
    async select(day,month,year) {
        await this.selectday.selectOption(day)
        await this.selectmonth.selectOption(month)
         await this.selectyear.selectOption(year)
           await this.checkbox.check()
        await this.registerbtn.click()
    }
    async registersuccessmsg() {
        await expect(this.registersuccess).toBeVisible()
    }


}
