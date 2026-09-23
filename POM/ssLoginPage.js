class SSLoginPage{
    constructor(page){
        this.emailTextBox=page.getByRole("textbox",{name:"Email"});
        this.passwordTextBox=page.getByRole("textbox",{name:"Password"});
        this.loginButton=page.getByRole("button",{name:"Login"});
    }
}
export default SSLoginPage