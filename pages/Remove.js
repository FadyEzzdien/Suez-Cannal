exports.Remove =
    class Remove {
        constructor(page) {
            this.page = page;
            this.backpackRemove = '[data-test= "remove-test.allthethings()-t-shirt-(red)"]';
        }

        async removed() {
            await this.page.locator(this.backpackRemove).click();

        }



    }