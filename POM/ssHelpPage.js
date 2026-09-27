class HelpPage{
    constructor(page){
        this.avatarImageTab=page.locator("//button[text()='Avatar Images']");
        this.girlAvatarImageDownloadbutton=page.getByAltText("avatar 2").locator('xpath=following-sibling::a');
    }
}
export default HelpPage