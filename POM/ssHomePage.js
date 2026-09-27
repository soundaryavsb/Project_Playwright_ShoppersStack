class SSHomePage{
    constructor(page){
        this.loginButton=page.getByRole("button",{name:"Login"});
        this.helpCenterLink=page.getByRole('link',{name:'Help Center'});
    }
}
export default SSHomePage