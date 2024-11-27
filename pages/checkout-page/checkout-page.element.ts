import { Page } from "@playwright/test"

export class CheckoutPageElements{
    private page : Page
    
    constructor(page : Page){
        this.page=page
    }

    get buttons(){
        return{
            placeOrder: this.page.locator('#cart_items .check_out'),
            payConfirmOrder: this.page.locator('[data-qa="pay-button"]')
        }
    }
    get textboxes(){
        return{
            nameOnCard: this.page.locator('[data-qa="name-on-card"]'),
            cardNumber: this.page.locator('[data-qa="card-number"]'),
            cvc: this.page.locator('[data-qa="cvc"]'),
            expiryMonth:  this.page.locator('[data-qa="expiry-month"]'),
            expiryYear: this.page.locator('[data-qa="expiry-year"]')
        }
    }

    get labels(){
        return{
            orderPlace: this.page.locator('[data-qa="order-placed"]')
        }
    }
}