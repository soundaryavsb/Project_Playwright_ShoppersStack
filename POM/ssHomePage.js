class SSHomePage{
    constructor(page){
        this.loginButton=page.getByRole("button",{name:"Login"});
    }
}
export default SSHomePage