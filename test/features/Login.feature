Feature: Performing an online purchase

    Scenario: Login with a standard user and purchase items
        Given I'm on the saucedemo login page
        When I log in with a standard user
        Then I am on products page
        Then I sort items by 'price - low to high'
            And I add 'Sauce Labs Backpack' to cart and check the price
            And I add 'Sauce Labs Bolt T-Shirt' to cart and check the price
            And I add 'Sauce Labs Onesie' to cart and check the price
        Then I go to cart and confirm selected items
        Then I remove 'Sauce Labs Onesie' from cart
            And I continue shopping
            And I add 'Sauce Labs Bike Light' to cart and check the price
        Then I go to cart and confirm selected items
            And I click on checkout button
        Then I fill my information and continue
            And I confirm the before tax total
        Then I click finish and complete the purchase
