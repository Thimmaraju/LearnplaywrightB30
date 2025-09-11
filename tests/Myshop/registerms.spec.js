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
        await register.titleradbtn();
        await register.firstnamedata(msregisterdata.firstname);
        await register.lastnamedata(msregisterdata.lastname);
        await register.passworddata(msregisterdata.password);
        await register.daydata('5');
        await register.monthdata('July');
        await register.yeardata('2022')
        await register.checkboxbtn()
        await register.registersuccessmsg()


    })


//})