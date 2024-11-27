import { Page } from "@playwright/test"

export class CartPageElements{
    private page : Page
    
    constructor(page : Page){
        this.page=page
    }

    get buttons(){
        return{
            proceedToCheckout: this.page.getByText('Proceed To Checkout')
        }
    }
    get links(){
        return{
            registerLoginLink: this.page.getByRole('link', { name: 'Register / Login' })
        }
    }
}