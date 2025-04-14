/// <reference types="cypress"/>

const { checkoutInformation } = require("../../support/PageObjects/checkoutInformationPage")
const { yourCart } = require ("../../support/PageObjects/yourCartPage")
const { navbar } = require("../../support/PageObjects/navabrPage")
const tests = require("../../fixtures/checkoutInformationData.json")

describe("[US 007] Swag Labs | Checkout: Your Information | Validate Shipping data", () => {

    context("Test Cases Validate Shipping Data", ()=> {

        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                cy.addProducts(test.products);
                cy.clickElement(navbar.btnShoppingCart());
                cy.clickElement(yourCart.btnCheckout());
                checkoutInformation.addYourInformation(test.first_name, test.last_name, test.postal_code);
                cy.clickElement(checkoutInformation.btnContinue());
                
                // Validation
                if(test.expected_text === "Checkout: Overview") {
                    cy.haveText(navbar.lblTitle(), test.expected_text);
                } else {
                    cy.haveText(checkoutInformation.errorMessage(), test.expected_text);
                }
            });
        });

    });

});
