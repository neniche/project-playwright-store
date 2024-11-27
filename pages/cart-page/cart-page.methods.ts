import{Page} from 'playwright'
import { CartPageElements } from './cart-page.elements'
import { Logger } from '../../support/logger'

export class CartPageMethods{
    private page : Page
    private cartPageElements : CartPageElements
    constructor(page : Page){
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }
    async clickOnProceedToCheckout(){
        await Logger.logStep('Click on Proced to checkout')
        await this.cartPageElements.buttons.proceedToCheckout.click()
    }
    async clickOnRegisterLoginLink(){
        await Logger.logStep('Click on Register / Login link')
        await this.cartPageElements.links.registerLoginLink.click()
    }
}