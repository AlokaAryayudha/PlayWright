import { expect } from "@playwright/test";
import { isDesktopViewport } from "../utils/IsDesktopViewport";

export class Navigation{
    constructor(page){
        this.page = page

        
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
        this.mobileBurgerButton = page.locator('[data-qa="burger-button"]') 
    }

    getBasketCount = async() => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.innerText()
        // "0" -> 0 merubah string ke number
        return parseInt(text, 10)
    }

    // benar untuk desktop dan salah untuk mobile 
    // false if mobile -> reverse false -> !false === true 
    goToCheckout = async() => {
    // if mobile viewport , first open the burger menu
    if (!isDesktopViewport(this.page)){
        await this.mobileBurgerButton.waitFor()
        await this.mobileBurgerButton.click()

    }
    await this.checkoutLink.waitFor()
    await this.checkoutLink.click()
    await this.page.waitForURL("/basket")
    }

}