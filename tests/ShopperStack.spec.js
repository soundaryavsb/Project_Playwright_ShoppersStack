import {expect, test} from "@playwright/test"
import HomePage from "../POM/ssHomePage"
import {login} from "../utilities/businessUtilities"
import loginData from "../Data Driven Testing/ssLogindetails.json"
test("shopper login",async ({page}) => {
    //POM
    let homePageObj=new HomePage(page);
    
    await page.goto(loginData.url);
    //Home page
    await homePageObj.loginButton.waitFor({state:"attached"})
    // let homepageLoginbuttonIsVisible=await homePageObj.loginButton.isVisible();
    await expect(homePageObj.loginButton).toBeVisible();
    // console.log("homepageLoginbuttonIsVisible: "+homepageLoginbuttonIsVisible);
    await homePageObj.loginButton.click();
    //Login page
    login(page);

    await page.waitForTimeout(3000);


})