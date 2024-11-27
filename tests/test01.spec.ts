import { test, expect } from '@playwright/test';
import { HomePageMethods } from '../pages/home-page/home-page.methods';
import { ProductPageMethods } from '../pages/product-page/product-page.methods';
import { CartPageMethods } from  '../pages/cart-page/cart-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { UserPageData } from '../pages/login-page/user-page.data'
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods'

const userCredentials = UserPageData.credentials;

test('BuyProduct', async({page})=>{
  const homePageMethods = new HomePageMethods(page)
  const productPageMethods = new ProductPageMethods(page)
  const cartPageMethods = new CartPageMethods(page)
  const loginPageMethods = new LoginPageMethods(page)
  const checkoutPageMethods = new CheckoutPageMethods(page)

  //navigate to the page
  await homePageMethods.navigateToThePage()
  await homePageMethods.clickOnThirdProduct()

  //go to the product details page
  await productPageMethods.typeQuantity()
  await productPageMethods.clickOnAddtoCart()
  await productPageMethods.clickOnViewCart()

  //go to the cart details page
  await cartPageMethods.clickOnProceedToCheckout()
  await cartPageMethods.clickOnRegisterLoginLink()

  //login to continue with checkout
  await loginPageMethods.insertEmail(userCredentials.emails.email1)
  await loginPageMethods.insertPassword(userCredentials.password)
  await loginPageMethods.clickOnLoginButton()

  // get back to the cart
  await homePageMethods.clickOnCartLink()
  await cartPageMethods.clickOnProceedToCheckout()
  await checkoutPageMethods.clickOnPlaceOrderButton()
  await checkoutPageMethods.insertNameCard(userCredentials.nameOnCard)
  await checkoutPageMethods.insertCardNumber(userCredentials.cardNumber)
  await checkoutPageMethods.insertCVC(userCredentials.cvc)
  await checkoutPageMethods.insertMonth(userCredentials.month)
  await checkoutPageMethods.insertYear(userCredentials.year)
  await checkoutPageMethods.clickOnPayButton()
  await checkoutPageMethods.verifyOrderPlacedLabel()
  await homePageMethods.clickOnLogoutLink()
  await page.waitForTimeout(4000)
})

/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/