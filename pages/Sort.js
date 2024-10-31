exports.Sort =
class Sort {
    constructor(page) {
        this.page = page;
        this.sortProduct = 'select[data-test="product-sort-container"]'
    }
    async selectSort(option) {
        await this.page.waitForSelector(this.sortProduct);
        await this.page.selectOption(this.sortProduct, option);
    }

}