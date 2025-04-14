/// <reference types="cypress"/>

const { productsList } = require("../../support/PageObjects/productsListPage")
const tests = require("../../fixtures/orderProductsData.json")

describe("[US 003] Swag Labs | PLP | Sort products", () => {

    context("Test Cases Sort products", () => {

        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                productsList.selectValue(test.opction_value);
    
                // Validation
                cy.determineOrderPrice(productsList.lblPricebar()).then((order) => {
                    expect(order).to.equal(test.order);
                });
            });
        });
    });
});