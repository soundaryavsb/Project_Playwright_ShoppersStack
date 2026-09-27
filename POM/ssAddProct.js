class AddProduct{
    constructor(page){
        this.addtoCartButton=page.locator("(//button[text()='add to cart'])[1]");
        this.cartIcon=page.locator('svg[id="cartIcon"]');
        this.buyNowButton=page.getByRole('button',{name:"Buy Now"});
        this.addressRadioButton=page.locator("(//input[@name='address'])[3]");
        this.addressProceedButton=page.getByRole('button',{name:"Proceed"});
    }
}
export default AddProduct