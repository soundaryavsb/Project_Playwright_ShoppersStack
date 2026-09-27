import {expect, test} from "@playwright/test"
import HomePage from "../POM/ssHomePage"
import {login} from "../utilities/businessUtilities"
import loginData from "../Data Driven Testing/ssLogindetails.json"
import path from "node:path"
import HelpPage from "../POM/ssHelpPage"
import MyprofilePage from "../POM/ssMyProfilePage"
import AddProduct from "../POM/ssAddProct"
import PaymentMethod from "../POM/ssPaymentMethod"
test("shopper login",async ({page}) => {
    //POM
    let homePageObj=new HomePage(page);
    let helpPageObj=new HelpPage(page);
    let myprofilePageObj=new MyprofilePage(page);
    let addProductObj=new AddProduct(page);
    let paymentMethodObj=new PaymentMethod(page);

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
    await expect.soft(homePageObj.helpCenterLink).toBeAttached();
    await homePageObj.helpCenterLink.click();
    //Avatar Images
    await expect(helpPageObj.avatarImageTab).toBeAttached();
    await helpPageObj.avatarImageTab.click();

    //Download the image
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        helpPageObj.girlAvatarImageDownloadbutton.click()
    ])

    //?Save a downloaded image in perticular location
    const suggestedFileName=downloadall.suggestedFilename();
    let filePath=path.join(__dirname,`../Downloads/${suggestedFileName}`); 
    await downloadall.saveAs(filePath); //!Save a downloaded image in perticular location
    console.log("file Name: "+filePath);
    
    //?Account Icon
    await expect(homePageObj.accountIcon).toBeAttached();
    await homePageObj.accountIcon.click();
    await expect(homePageObj.myprofileList).toBeAttached();
    await homePageObj.myprofileList.click();
    
    //?Click image add icon
    //* Click addPhotoIcon
    await expect(myprofilePageObj.addPhotoIcon).toBeAttached();
    await myprofilePageObj.addPhotoIcon.click();
    //* Click FileButton
    await expect(myprofilePageObj.chooseFileButton).toBeAttached();
    await myprofilePageObj.chooseFileButton.setInputFiles(filePath);
    //* Click uploadButton
    await expect(myprofilePageObj.uploadButton).toBeVisible();
    await myprofilePageObj.uploadButton.click();
    
    await downloadall.delete();
    
    //?Take a ScreenShot - Profile update
    let ScreenShotPath_Profile=path.join(__dirname,"../ScreenShots/Profile.png");
    await page.screenshot({path:ScreenShotPath_Profile});

    //? Home page - Search Shirt
    await homePageObj.searchboxf.fill("shirt");
    await homePageObj.searchbutton.click();
    await page.waitForTimeout(1000);
    //Add Product page
    await addProductObj.addtoCartButton.click();
    await page.waitForTimeout(1000);
    await addProductObj.cartIcon.click();
    await page.waitForTimeout(1000);
    await addProductObj.buyNowButton.click();
    await page.waitForTimeout(1000);
    await addProductObj.addressRadioButton.check();
    await page.waitForTimeout(1000);
    await addProductObj.addressProceedButton.click();
    await page.waitForTimeout(1000);

    //?Take a ScreenShot
    let ScreenShotPath_AddressAdd=path.join(__dirname,"../ScreenShots/Address.png");
    await page.screenshot({path:ScreenShotPath_AddressAdd});

    //* website problem
    /*
    //Payment Page
    await paymentMethodObj.cODRadioButton.check();
    await page.waitForTimeout(1000);
    await paymentMethodObj.paymentProceedButton.click();
    await page.waitForTimeout(3000);
    */
/*    //Men Session page
    await page.locator('a[id="men"]').hover();
    //TShirt
    await page.getByRole("link",{name:"T-shirts"}).click();
    //select product
    await page.locator("//div[contains(@class,'cat_box')]/div[1]").hover();
    await page.locator("//div[contains(@class,'cat_box')]/div[1]").click();
    //select add to cart
    // await page.getByRole('button',{name:"Add To Cart"}).waitFor({state:'attached'})
    // await page.getByRole('button',{name:"Add To Cart"}).click();
    await expect(page.locator("//button[@id='Add To Cart']")).toBeAttached();
    await page.locator("//button[@id='Add To Cart']").click();

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