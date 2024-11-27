import{Page} from 'playwright'
import { ProductPageElements } from './product-page.elements'
import { Logger } from '../../support/logger'

export class ProductPageMethods{
    private page : Page
    private productPageElements : ProductPageElements
    constructor(page : Page){
        this.page = page
        this.productPageElements = new ProductPageElements(page)
    }

    async typeQuantity(){
        const getRandomIntegerInclusive = (min, max) => {
            min = Math.ceil(min)
            max = Math.floor(max)
              
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        const randomInteger3 = getRandomIntegerInclusive(1, 20)
        await this.productPageElements.Boxes.quantityBox.fill(String(randomInteger3))
    }
    async clickOnAddtoCart(){
        await Logger.logStep('Click on Add to cart button')
        await this.productPageElements.buttons.addToCartButton.click()
    }
    async clickOnViewCart(){
        await Logger.logStep('Click on View cart link')
        await this.productPageElements.links.viewCartLink.click()
    }
}