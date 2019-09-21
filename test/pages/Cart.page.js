class CartPage {
    itemByName(itemName) {
        return $(`//div[text()="${itemName}"]`);
    }

    get itemPrice() {
        return $('div[class="inventory_details_price"]');
    }

    get removeFromCartBtn() {
        return $('//button[text()="REMOVE"]');
    }

    get backBtn() {
        return $('button[class="inventory_details_back_button"]');
    }

    get continueShoppingBtn() {
        return $('//a[text()="Continue Shopping"]');
    }

    get checkoutBtn() {
        return $('//a[text()="CHECKOUT"]');
    }

    get cartHeader() {
        return $('div[class="subheader"]');
    }

    removeItem(item) {
        // Wait for cart page to load (just in case)
        this.itemByName(item).waitForExist();
        this.itemByName(item).click();

        // Wait for item page to load
        this.itemPrice.waitForExist();
        const price = this.itemPrice.getText().replace("$","");

        // Capture the item price into a global variable to calculate total
        browser.totalPrice -= parseFloat(price);

        // Now add the item to cart
        this.removeFromCartBtn.click();

        // Go back to cart page
        this.backBtn.click();
    }
}

export const cartPage = new CartPage();
