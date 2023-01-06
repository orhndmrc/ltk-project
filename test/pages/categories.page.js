class CategoriesPage {
    async initialize() {
        this.categoriesTitle = await $('h2')
    }

    get categories() { return $$('//*[contains(@class, "category-item")]//*[contains(@class, "text-subtitle")]') }
}
export default new CategoriesPage()