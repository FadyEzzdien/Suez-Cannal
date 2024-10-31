exports.AddProd =
    class AddProd {
        constructor(page) {
            this.page = page;
            // buy  items
            this.firstItem = '#add-to-cart-sauce-labs-onesie';
            this.secondItem = 'button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]';
            
        }

        async AddProduct() {
            await this.page.locator(this.firstItem).click();
            await this.page.locator(this.secondItem).click();
            await this.page.waitForTimeout(2000);
        }



    }