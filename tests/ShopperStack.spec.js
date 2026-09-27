import {expect, test} from "@playwright/test"
import HomePage from "../POM/ssHomePage"
import {login} from "../utilities/businessUtilities"
import loginData from "../Data Driven Testing/ssLogindetails.json"
import path from "node:path"
import HelpPage from "../POM/ssHelpPage"
import MyprofilePage from "../POM/ssMyProfilePage"
test("shopper login",async ({page}) => {
    //POM
    let homePageObj=new HomePage(page);
    let helpPageObj=new HelpPage(page);
    let myprofilePageObj=new MyprofilePage(page);

    await page.goto(loginData.url);
    //Home page
    await homePageObj.loginButton.waitFor({state:"attached"})
    await expect(homePageObj.loginButton).toBeVisible();
    await homePageObj.loginButton.click();
    //Login page
    login(page);

    //Add profile page
    //helpcenter
    await homePageObj.helpCenterLink.hover();
    await homePageObj.helpCenterLink.click();
    //Avatar Images
    await helpPageObj.avatarImageTab.click();

    //Download the image
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        helpPageObj.girlAvatarImageDownloadbutton.click()
    ])
    const suggestedFileName=downloadall.suggestedFilename();
    let filePath=path.join(__dirname,`../Downloads/${suggestedFileName}`); 
    await downloadall.saveAs(filePath); //!Save a downloaded image in perticular location
    console.log("file Name: "+filePath);
    
    //Account Icon
    await homePageObj.accountIcon.click();
    await homePageObj.myprofileList.click();
    //Click image add icon
    await myprofilePageObj.addPhotoIcon.click();
    await page.waitForTimeout(2000);
    await myprofilePageObj.chooseFileButton.setInputFiles(filePath);
    await myprofilePageObj.uploadButton.click();
    await page.waitForTimeout(2000);
    
    await downloadall.delete();
    //Take a ScreenShot
    let ScreenShotPath_Profile=path.join(__dirname,"../ScreenShots/profile.png");
    await page.screenshot({path:ScreenShotPath_Profile});

/*
    //Men Session page
    await page.locator('a[id="men"]').hover();
    //TShirt
    await page.getByRole("link",{name:"T-shirts"}).click();
    //select product
    await page.locator("//div[contains(@class,'cat_box')]/div[1]").hover();
    await page.locator("//div[contains(@class,'cat_box')]/div[1]").click();
    //select add to cart
    // await page.getByRole('button',{name:"Add To Cart"}).waitFor({state:'attached'})
    // await page.getByRole('button',{name:"Add To Cart"}).click();
    await page.locator("button[id='Add To Cart']").click();

    //click cart page
    await page.locator('svg[id="cartIcon"]').click();
    await page.getByRole('button',{name:"Buy Now"}).click();

    //Adress Select
    await page.locator("(//input[@name='address'])[3]").check();
    await page.getByRole('button',{name:"Proceed"}).click();
    
    
    //Payment Page
    await page.locator("input[value='Net Banking']").check();
    await page.getByRole('Button',{name:"Proceed"}).click();
    
    //click buy now
    //click radio button
    //click proceed button

*/
    await page.waitForTimeout(3000);
})