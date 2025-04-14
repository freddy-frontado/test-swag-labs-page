/// <reference types="cypress"/>

const { navbar} = require("../../support/PageObjects/navabrPage")
const { yourCart } = require("../../support/PageObjects/yourCartPage")
const tests = require("../../fixtures/addProductData.json")

describe("[US 004] Swag Labs | Add products to Shopping-Cart", () => {

    context("Test Cases Add Products to Shopping Cart", () => {
        
        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {                
                cy.addProducts(test.products, test.list_page);
                cy.haveText(navbar.spanShoppingCart(), test.expected_quantity);
                cy.clickElement(navbar.btnShoppingCart());
                
                // Validation
                cy.get(yourCart.lblInventoryName()).each((elements, index) => {
                    let text = elements.text();
                    expect(text.trim()).to.equal(test.products[index]);
                });
            });
        });

    });

});
