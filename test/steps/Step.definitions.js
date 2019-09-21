import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { productsPage } from '../pages/Products.page';
import { cartPage } from '../pages/Cart.page';
import { checkoutPage } from '../pages/Checkout.page';
import { context } from '../data/Context';
import * as systemMessages from '../constants/Messages.constant';

Given(/^I'm on the saucedemo login page$/, () => {
    loginPage.open();
});

When(/^I log in with a standard user$/, () => {
    loginPage.login(context.logins.standardUser);
    productsPage.productsHeader.waitForExist();
});

Then(/^I am on products page$/, () => {
    productsPage.productsHeader.waitForExist();

    // Make sure that we have landed on Products page
    assert.equal(
        productsPage.productsHeader.getText(),
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^I sort items by '(.*)'$/, (sortMethod) => {
    productsPage.sort(sortMethod);
});

Then(/^I add '(.*)' to cart and check the price$/, (item) => {
    productsPage.addItem(item);

    // Make sure that we are on Products page before going to next step
    productsPage.productsHeader.waitForExist();
});

Then(/^I go to cart and confirm selected items$/, () => {
    productsPage.cartBtn.waitForExist();
    productsPage.cartBtn.click();

    // Make sure that we have landed on Cart page
    assert.equal(
        cartPage.cartHeader.getText(),
        systemMessages.FEEDBACK_CART_PAGE,
    );
});

Then(/^I remove '(.*)' from cart$/, (item) => {
    cartPage.removeItem(item);
});

Then(/^I continue shopping$/, () => {
    cartPage.continueShoppingBtn.waitForExist();
    cartPage.continueShoppingBtn.click();
});

Then(/^I click on checkout button$/, () => {
    cartPage.checkoutBtn.waitForExist();
    cartPage.checkoutBtn.click();

    // Make sure that we have landed on Checkout page
    assert.equal(
        checkoutPage.checkoutHeader.getText(),
        systemMessages.FEEDBACK_CHECKOUT_INFO_PAGE,
    );
});

Then(/^I fill my information and continue$/, () => {
    checkoutPage.fillForm(context.userData.standardUser);

    // Make sure that we have landed on Checkout page
    assert.equal(
        checkoutPage.checkoutHeader.getText(),
        systemMessages.FEEDBACK_CHECKOUT_OVERVIEW_PAGE,
    );
});

Then(/^I confirm the before tax total$/, () => {
    checkoutPage.subTotal.waitForExist();

    const subTotalStr = checkoutPage.subTotal.getText();
    const index = subTotalStr.indexOf("$");
    const subTotalNumber = parseFloat(subTotalStr.substring(index + 1));

    // Make sure that we have correct total before tax on Checkout page
    assert.equal(
        subTotalNumber,
        browser.totalPrice
    );
});

Then(/^I click finish and complete the purchase$/, () => {
    checkoutPage.finishBtn.waitForExist();
    checkoutPage.finishBtn.click();

    // Make sure that we have landed on Checkout page
    checkoutPage.completionHeader.waitForExist();
    assert.equal(
        checkoutPage.completionHeader.getText(),
        systemMessages.FEEDBACK_COMPELE_TRANSACTION,
    );
});





