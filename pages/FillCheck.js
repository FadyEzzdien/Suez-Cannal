exports.FillCheck =
    class FillCheck {
        constructor(page) {
            this.page = page;
            // View Cart 
            this.view = '[data-test="shopping-cart-badge"]';
            // check button
            this.checkOutButton = 'button[data-test="checkout"]';
            // first name
            this.firstName = 'input[data-test="firstName"]';
            //last name
            this.lastName = 'input[data-test="lastName"]';
            //postalcode 
            this.psotalCode = 'input[data-test="postalCode"]';
            //continue
            this.continue = '[data-test="continue"]';
        }

        async Information(first_name, last_name, postal_code) {
            await this.page.locator(this.view).click();
            await this.page.locator(this.checkOutButton).click();
            await this.page.locator(this.firstName).fill(first_name);
            await this.page.locator(this.lastName).fill(last_name);
            await this.page.locator(this.psotalCode).fill(postal_code);
            await this.page.locator(this.continue).click();

        }


    }