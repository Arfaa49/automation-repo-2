import { Page, Locator , expect} from "@playwright/test";



export class HomePage{
    page:Page;
    home:Locator;

   constructor(page:Page){
    this.page=page;
    this.home=page.getByRole('link', { name: 'Home' })

   }
    
    async Home(){
        await this.home.click();
        await expect (this.page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
    }



}