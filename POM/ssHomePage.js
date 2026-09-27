class SSHomePage{
    constructor(page){
        this.loginButton=page.getByRole("button",{name:"Login"});
        this.helpCenterLink=page.getByRole('link',{name:'Help Center'});
        this.accountIcon=page.locator('[aria-label="Account settings"]');
        this.myprofileList=page.getByText("My Profile");
    }
}
export default SSHomePage