class PaymentMethod{
    constructor(page){
        this.cODRadioButton=page.locator("input[value='COD']");
        this.netBankingRadioButton=page.locator("input[value='Net Banking']");
        this.paymentProceedButton=page.getByRole('Button',{name:"Proceed"});
    }
}
export default PaymentMethod