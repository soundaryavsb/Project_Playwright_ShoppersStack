import LoginPage from "../POM/ssLoginPage"
import loginData from "../Data Driven Testing/ssLogindetails.json"
import { expect } from "@playwright/test";
export async function login(page){
    let loginPageObj=new LoginPage(page);
    await expect(loginPageObj.emailTextBox).toBeAttached();
    await loginPageObj.emailTextBox.fill(loginData.email);
    await expect(loginPageObj.passwordTextBox).toBeAttached();
    await loginPageObj.passwordTextBox.fill(loginData.password);
    await expect(loginPageObj.loginButton).toBeAttached();
    await loginPageObj.loginButton.click();
}