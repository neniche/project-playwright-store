import { Page } from 'playwright'
import { LoginPageElements } from './login-page.elements'
import { Logger } from '../../support/logger'

export class LoginPageMethods {
    private page: Page
    private loginPageElements : LoginPageElements
    
    constructor(page: Page){
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertEmail(email: string ){
        await this.loginPageElements.textboxes.email.fill(email)
    }

    async insertPassword(password: string ){
        await this.loginPageElements.textboxes.password.fill(password)
    }

    async clickOnLoginButton(){
        await Logger.logStep('Click on login button')
        await this.loginPageElements.buttons.login.click()
    }
}