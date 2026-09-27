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
    await expect(homePageObj.loginButton).toBeVisible();
    await homePageObj.loginButton.click();
    //Login page
    login(page);

    //Add profile page
    //helpcenter
    await page.getByRole('link',{name:'Help Center'}).hover();
    await page.getByRole('link',{name:'Help Center'}).click();
    //Avatar Images
    await page.locator("//button[text()='Avatar Images']").click();

    //Download the image
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        page.getByAltText("avatar 2").locator('xpath=following-sibling::a').click()
    ])
        
    console.log(downloadall.filePath);
        
        
    //Get downloaded file
    // const download = await downloadPromise;

    // //Get temporary downloaded file path
    // const filePath = await download.path();

    // console.log("Temporary file path:", filePath);
    // console.log("File path:", filePath);
    // console.log("Suggested filename:", download.suggestedFilename());
    // console.log("Failure:", await download.failure());
    //Account Icon
    await page.locator('[aria-label="Account settings"]').click();
    await page.getByText("My Profile").click();
    //Click image add icon
    await page.getByTestId('AddPhotoAlternateOutlinedIcon').click();
    await page.waitForTimeout(2000);
    // await page.getByRole('button',{name:"Choose File"}).click();
    // await page.locator('input[type="file"]').setInputFiles(filePath);
    await page.getByRole('button',{name:"Choose File"}).setInputFiles(filePath);
    await page.getByRole('button',{name:"upload"}).click();
    await page.waitForTimeout(2000);
    

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