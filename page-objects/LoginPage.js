import { expect } from "@playwright/test";

export class LoginPage{
    constructor(page){
        this.page = page

        this.moveToSignupButton = page.locator('[data-qa="go-to-signup-button"]')
    }

    moveToSignup = async() => {
        await this.moveToSignupButton.waitFor()
        await this.moveToSignupButton.click()
        await this.page.waitForURL(/\/signup/)
        // regex untuk URL https://regex101.com/
        // await this.page.pause()
    }

}