class HomePage {
    async initialize() {
        this.forYouTab = await $('[href="/home/for-you"] span')
        this.shopTab = await $('[href="/categories"] span')
        this.profileIcon = await $('//*[contains(@class, "profile-outline")]')
        this.settingsOption = await $('[href="/account"]')
        this.deleteMyAccountBtn = await $('//*[text()="Delete my account and data"]')
        this.submitBtnTodelete = await $('//*[text()="Delete My Account"]')
        this.dismissBtn = await $('//*[text()="Dismiss"]')
    }
    async deleteProfile(){
        await this.profileIcon.moveTo()
        await this.settingsOption.waitForDisplayed()
        await this.settingsOption.click()
        await this.deleteMyAccountBtn.waitForDisplayed()
        //await this.deleteMyAccountBtn.scrollIntoView()
        await this.deleteMyAccountBtn.click()
        await this.submitBtnTodelete.waitForDisplayed()
        await this.submitBtnTodelete.click()
        await this.dismissBtn.waitForDisplayed()
        await this.dismissBtn.click()
    }
}
export default new HomePage()