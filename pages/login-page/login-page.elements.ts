import { Page } from "@playwright/test"

export class LoginPageElements{
    private page : Page
    
    constructor(page : Page){
        this.page=page
    }

    get textboxes(){
        return{
            email: this.page.locator('[data-qa="login-email"]'),
            password: this.page.locator('[data-qa="login-password"]')
        }
    }
    get buttons(){
        return{
            login: this.page.getByRole('button', { name: 'Login' })
        }
    }
}