import Page from "./page";

class LoginPage extends Page{
    async initialize(){
        this.loginBtn = await $('//*[@href="/login"]')
        this.emailBox = await $('(//*[@type="email"])[1]')
        this.continueBtn1 = await $('//*[text()="continue"]')
        this.passwordBox = await $('(//*[@type="password"])[1]')
        this.continueBtn2 = await $('(//*[text()="continue"])[2]')
        this.signUpBtn = await $('[href="/signup"]')
        this.submitToSignUpBtn = await $('//*[text()="sign up to begin shopping"]')
    }

    async login(email, password){
        await super.navigateToLTK()
        await this.loginBtn.click()
        await this.emailBox.waitForDisplayed()
        await this.emailBox.addValue(email)
        await this.continueBtn1.click()
        await this.passwordBox.waitForDisplayed()
        await this.passwordBox.addValue(password)
        await this.continueBtn2.click()
    }
    
    async signUp(email, password){
        await super.navigateToLTK()
        await this.signUpBtn.click()
        await this.emailBox.waitForDisplayed()
        await this.emailBox.addValue(email)
        await this.continueBtn1.click()
        await this.passwordBox.waitForDisplayed()
        await this.passwordBox.addValue(password)
        await this.submitToSignUpBtn.click()
    }

}
export default new LoginPage()