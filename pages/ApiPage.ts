import { Page, Locator , expect} from "@playwright/test";



export class ApiPage{
    page:Page;
    testing:Locator;


    constructor(page:Page){
        this.page=page;
        this.testing= page.getByRole('link', { name:  'API Testing' })
    }

    async Testing(){
       await this.testing.click();
        await expect(this.page.getByText('Below is the list of APIs for you to practice')).toBeVisible();
    }
}