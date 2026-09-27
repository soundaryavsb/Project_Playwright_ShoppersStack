class MyprofilePage{
    constructor(page){
        this.addPhotoIcon=page.getByTestId('AddPhotoAlternateOutlinedIcon');
        this.chooseFileButton=page.getByRole('button',{name:"Choose File"});
        this.uploadButton=page.getByRole('button',{name:"upload"});
    }
}
export default MyprofilePage