const { test, expect } = require('@playwright/test');
import { loginPage } from '../../pageObjects/loginPage.po'
import { dashboardPage } from '../../pageObjects/dashBoardpage.po';
import { addEmployeePage } from '../../pageObjects/addemployeepage.po';
import logindata from "../../testData/login.json"
import addemployeedata from "../../testData/addemployee.json"



let page;
let login;
let dashboard;
let addemp;
test.describe("Verify Add Employee functionality ", async () => {


    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()

        login = new loginPage(page)
        dashboard = new dashboardPage(page)
        addemp = new addEmployeePage(page)

        await login.lauchUrl()
        await login.loginwithCreds(logindata.username, logindata.password)
        await login.loginSuccess()

    })

    test("Verify add Employee with Mandatory detaials", async () => {

        await dashboard.navigatetoPIM()
        await addemp.navigatetoAddEmployee()
        await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
        await addemp.addemployyeeSuccessMesage()

    })



})