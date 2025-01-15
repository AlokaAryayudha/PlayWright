import {new_user_full_journey} from "../tests/new_user_full_journey.spec"

export class RegisterPage{
    constructor(page){
        this.page = page
        this.emailInput = page.getByPlaceholder('E-Mail')
        this.passwordInput = page.getByPlaceholder('Password')
        this.registerButton = page.getByRole('button', { name: 'Register' })
    }

    signUpAsNewUser = async (email , password) => {
        
        await this.emailInput.waitFor()
        // const emailId = uuidv4()
        // const email = emailId + "@gmail.com"
        await this.emailInput.fill(email)

        await this.passwordInput.waitFor()
        // const password = uuidv4()
        await this.passwordInput.fill(password)

        await this.registerButton.waitFor()
        await this.registerButton.click()
    }
}