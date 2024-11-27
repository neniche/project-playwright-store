import { Page } from "@playwright/test"

export class HomePageElements{
    private page : Page
    
    constructor(page : Page){
        this.page=page
    }

    get products(){
        return{
            thirdProduct: this.page.locator('div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a')
        }
    }

    get links(){
        return{
            cart: this.page.getByRole('link', { name: 'Cart' }),
            logout: this.page.getByRole('link', {name: 'Logout' })
        }
    }


}

