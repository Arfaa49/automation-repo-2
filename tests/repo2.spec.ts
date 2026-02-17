import{test, expect} from '@playwright/test'
import {TestcasesPage} from "../pages/TestcasesPage"
import {ApiPage} from "../pages/ApiPage"


test.beforeEach('website page', async({page})=>{
    await page.goto('https://automationexercise.com/login')

});
test('testcases', async({page})=>{

    const cases= new TestcasesPage(page);
    await cases.Cases;

});

test('Api Testing', async({page})=>{
        
    const api = new ApiPage(page);
    await api.Testing();
});