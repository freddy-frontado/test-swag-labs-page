/// <reference types="cypress"/>

const { navbar} = require("../../support/PageObjects/navabrPage")
const { yourCart } = require("../../support/PageObjects/yourCartPage")
const tests = require("../../fixtures/seeShoppingCartData.json")

describe("[US 006] Swag Labs | Your Cart | See Shopping Cart", () => {  

    context('Test Cases See Shopping Cart', ()=>{

        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                cy.login(test.user_name, test.password);
                cy.addProducts(test.products, test.list_page);
                cy.haveText(navbar.spanShoppingCart(), test.expected_quantity);
                cy.clickElement(navbar.btnShoppingCart());
                cy.elementExist(yourCart.btnRemove());
    
                // Validation
                cy.elementExist(yourCart.btnContinueShopping());
                cy.elementExist(yourCart.btnCheckout());
                cy.clickElement(yourCart.btnContinueShopping());
                cy.havePath(test.path);
            });
        });

    });
    
});