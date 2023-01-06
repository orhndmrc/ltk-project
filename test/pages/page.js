const { expect } = require('chai')
const testData = require('../data/testData')

export default class Page {
    constructor() {
        this.title = 'LTK | Fashion, Home, Beauty, Fitness and More'
        this.baseUrl = testData.baseUrl
    }
    
    async navigateToLTK() {
        await browser.url(this.baseUrl)
        await browser.pause(3000)
        expect(await browser.getTitle()).to.equal(this.title)
    }
}