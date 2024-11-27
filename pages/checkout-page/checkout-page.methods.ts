import{Page} from 'playwright'
import { CheckoutPageElements } from './checkout-page.element'
import { Logger } from '../../support/logger'

export class CheckoutPageMethods{
    private page : Page
    private checkoutPageElements : CheckoutPageElements
    constructor(page : Page){
        this.page = page
        this.checkoutPageElements = new CheckoutPageElements(page)
    }
    async clickOnPlaceOrderButton (){
        await Logger.logStep('Click on Place Order')
        await this.checkoutPageElements.buttons.placeOrder.click()
    }
    async insertNameCard(namecard : string){
        await this.checkoutPageElements.textboxes.nameOnCard.fill(namecard)
    }
    async insertCardNumber(cardnumber : string){
        await this.checkoutPageElements.textboxes.cardNumber.fill(cardnumber)
    }
    async insertCVC(cvc : string){
        await this.checkoutPageElements.textboxes.cvc.fill(cvc)
    }
    async insertMonth(month : string){
        await this.checkoutPageElements.textboxes.expiryMonth.fill(month)
    }
    async insertYear(year : string){
        await this.checkoutPageElements.textboxes.expiryYear.fill(year)
    }
    async clickOnPayButton(){
        await Logger.logStep('Click on Pay and Confirm order')
        await this.checkoutPageElements.buttons.payConfirmOrder.click()
    }
    async verifyOrderPlacedLabel(){
        await this.checkoutPageElements.labels.orderPlace.isVisible()
    }
}