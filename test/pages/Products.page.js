import { assert } from 'chai';

class ProductsPage {
    get productsHeader() {
        return $('div[class="product_label"]');
    }

    itemByName(itemName) {
        return $(`//div[text()="${itemName}"]`);
    }

    get itemPrice() {
        return $('div[class="inventory_details_price"]');
    }

    get addToCartBtn() {
        return $('//button[text()="ADD TO CART"]');
    }

    get backBtn() {
        return $('button[class="inventory_details_back_button"]');
    }

    get cartBtn() {
        return $('div[id="shopping_cart_container"]');
    }

    get sortBox() {
        return $('select[class="product_sort_container"]');
    }

    sort(sortMethod) {
        this.sortBox.waitForExist();

        if (sortMethod.toString().localeCompare('price - low to high')) {
            this.sortBox.selectByAttribute('value', 'lohi');
        } else if(sortMethod.localeCompare('price - high to low')){
            this.sortBox.selectByAttribute('value', 'hilo');
        } else{
            // Implement rest of the sort cases in the future.
            assert.fail('invalid sort method');
        }
    }

    addItem(item) {
        // Wait for products page to load (just in case)
        this.itemByName(item).waitForExist();
        this.itemByName(item).click();

        // Wait for item page to load
        this.itemPrice.waitForExist();
        const price = this.itemPrice.getText().replace("$","");

        // Capture the item price into a global variable to calculate total
        browser.totalPrice += parseFloat(price);

        // Now add the item to cart
        this.addToCartBtn.click();

        // Go back to products page
        this.backBtn.click();
    }
}

export const productsPage = new ProductsPage();
