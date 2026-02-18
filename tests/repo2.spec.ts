import{test, expect} from '@playwright/test'
import {TestcasesPage} from "../pages/TestcasesPage"
import {ApiPage} from "../pages/ApiPage"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage"

test.beforeEach('website page', async({page})=>{
    await page.goto('https://automationexercise.com/login')

});
      
     test.describe('smoke', () => {

   test('login test', async({page})=>{

    const login = new LoginPage(page);
    await login.signIn();
});
test('Home', async ({page})=>{

        const home = new HomePage(page);
        await home.Home();



});

     });
   test.describe('regression', ()=>{
test('testcases', async({page})=>{

    const cases= new TestcasesPage(page);
    await cases.Cases;

});

test('Api Testing', async({page})=>{
        
    const apI = new ApiPage(page);
    await apI.Testing();
});

   });