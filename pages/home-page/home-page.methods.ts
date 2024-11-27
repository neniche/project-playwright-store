import{Page} from 'playwright'
import { HomePageElements } from './home-page.elements'

export class HomePageMethods{
    private page : Page
    private homePageElements : HomePageElements
    constructor(page : Page){
        this.page = page
        this.homePageElements = new HomePageElements(page)
    }
    async navigateToThePage(){
        await this.page.goto('https://automationexercise.com/')
    }
    async clickOnThirdProduct(){
        await this.homePageElements.products.thirdProduct.click()
    }
    async clickOnCartLink(){
        await this.homePageElements.links.cart.click()
    }
    async clickOnLogoutLink(){
        await this.homePageElements.links.logout.click()
    }
}