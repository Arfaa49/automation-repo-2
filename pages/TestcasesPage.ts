import { Page, Locator , expect} from "@playwright/test";



export class TestcasesPage{
    page:Page;
    test:Locator;


    constructor(page:Page){
        this.page=page;
        this.test=page.getByText('Test Cases');


    }

    async Cases(){
        await this.test.click();
        await expect(this.page.getByText('Below is the list of test')).toBeVisible();
    }
}