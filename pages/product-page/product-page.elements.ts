import { Page } from "@playwright/test"

export class ProductPageElements{
    private page : Page
    
    constructor(page : Page){
        this.page=page
    }
    get Boxes(){
        return{
           quantityBox: this.page.locator('#quantity')
        }
    }

    get buttons(){
        return{
            addToCartButton: this.page.getByRole('button', { name: ' Add to cart' })
        }
    }

    // modal elements
    get links(){
        return{
            viewCartLink: this.page.getByRole('link', { name: 'View Cart' })
        }
    }
}