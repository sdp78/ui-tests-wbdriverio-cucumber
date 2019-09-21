import {assert} from "chai";

class CheckoutPage {
    get checkoutHeader() {
        return $('div[class="subheader"]');
    }

    get continueBtn() {
        return $('input[value="CONTINUE"]');
    }

    get inputFName() {
        return $('input[id="first-name"]');
    }

    get inputLName() {
        return $('input[id="last-name"]');
    }

    get inputZip() {
        return $('input[id="postal-code"]');
    }

    get subTotal() {
        return $('div[class="summary_subtotal_label"]');
    }

    get finishBtn() {
        return $('a[href="./checkout-complete.html"]');
    }

    get completionHeader() {
        return $('h2[class="complete-header"]');
    }

    fillForm(userData) {
        assert.isTrue(this.inputFName.isExisting(), 'First Name field is missing');
        assert.isTrue(this.inputLName.isExisting(), 'Last Name field is missing');
        assert.isTrue(this.inputZip.isExisting(), 'Zip Code field is missing');

        this.inputFName.setValue(userData.firstName);
        this.inputLName.setValue(userData.lastName);
        this.inputZip.setValue(userData.zipCode);
        this.continueBtn.click();
    }
}

export const checkoutPage = new CheckoutPage();
