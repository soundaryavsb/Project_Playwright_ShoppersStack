class SSHomePage{
    constructor(page){
        this.loginButton=page.getByRole("button",{name:"Login"});
        this.helpCenterLink=page.getByRole('link',{name:'Help Center'});
        this.accountIcon=page.locator('[aria-label="Account settings"]');
        this.myprofileList=page.getByText("My Profile");
        this.searchboxf=page.locator("input[id='search']");
        this.searchbutton=page.locator("svg[id='searchBtn']");
    }
}
export default SSHomePage