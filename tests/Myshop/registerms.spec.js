import { test } from '@playwright/test';
import {registerpage} from '../../pageObjects/MyshopPO/registerms.PO';
import msregisterdata from '../../testData/msregister.json';
let page;
let register;
//test.describe('verify register', () => {
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        register = new registerpage(page)
        await register.launchurl()
    })
    test('register with valid account', async () => {
        await register.navigatetosignup()
        await register.emailcred(msregisterdata.email);
        await register.accreatesuccessmsg();
        await register.registerinput(msregisterdata.firstname,msregisterdata.lastname,msregisterdata.password)


        await register.select(msregisterdata.day,msregisterdata.month,msregisterdata.year);
       
        await register.registersuccessmsg()


    })


//})