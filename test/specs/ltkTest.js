import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'
import CategoriesPage from '../pages/categories.page'
import { getTextFromList } from '../utility'
const { expect } = require('chai')
const should = require('chai').should()
const testData = require('../data/testData')

describe('LTK Tests', () => {
    before(async () => {
        await LoginPage.initialize()
        await HomePage.initialize()
        await CategoriesPage.initialize()
    })

    it('should sign up and redirect to discover home page - TC1 ', async () => {
        await LoginPage.signUp(testData.email, testData.password)
        await HomePage.forYouTab.waitForDisplayed()
        expect(await browser.getTitle()).to.equal('Discover content from our community of Creators | LTK')
    })

    it('should verify that the styles categories are presented - TC2', async () => {
        await HomePage.shopTab.waitForDisplayed({timeout: 10000})
        should.exist(HomePage.shopTab)
        await HomePage.shopTab.click()
        const header = CategoriesPage.categoriesTitle
        await header.waitForDisplayed()
        expect(await header.getText()).to.equal('LTK Categories')
        expect(await browser.getTitle()).to.equal('Categories | LTK')
        const categoryList = await getTextFromList(await CategoriesPage.categories)
        expect(categoryList.length).to.equal(25)
        expect(categoryList.sort()).deep.equal(testData.categoryTitles.sort())
    })
    
    after(async () => {
        await HomePage.deleteProfile()
    })
})

