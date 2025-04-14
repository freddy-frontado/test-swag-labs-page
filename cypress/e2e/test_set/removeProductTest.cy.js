/// <reference types="cypress"/>

const { navbar } = require("../../support/PageObjects/navabrPage")
const tests = require("../../fixtures/removeProductData.json")

describe("[US 005] Swag Labs | Remove products to Shopping-Cart", () => {

    context("Test Cases Remove products to Shopping-Cart", () => {
        
        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                if(test.your_cart) {
                    cy.addProducts(test.products);
                    cy.clickElement(navbar.btnShoppingCart());
                    cy.removeProducts();
                    // Validation
                    cy.haveText(navbar.btnShoppingCart(), test.expected_quantity);
                } else {
                    cy.addProducts(test.products);
                    cy.removeProducts();
                    // Validation
                    cy.haveText(navbar.btnShoppingCart(), test.expected_quantity);
                }
            });
        });
    });
});
