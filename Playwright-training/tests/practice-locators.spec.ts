import test from "@playwright/test";

//Locators

test('Learning Locators', async({page})=>{
    //page.getByRole();
    await  page.goto("https://playwright.dev/");
    await page.getByRole('button', {name :'Get started'});
    console.log(page.url());

    //page.getByLabel();
    await page.getByLabel('Name');

    //page.getByPlaceholder();
    await page.getByPlaceholder('First Name');

    //page.getByText();
    await page.getByText('Student Registration Form');

    //page.getByTitle();
    await page.getByTitle('ParaBank');

    //page.getByAltText()  //image
    await page.getByAltText('ParaBank');

    //page.getByTestId();
    await page.getByTestId('app-shell-header-context-menu-surface'); //chatGpt



});