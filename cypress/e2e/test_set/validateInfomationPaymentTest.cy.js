/// <reference types="cypress"/>

const { navbar} = require("../../support/PageObjects/navabrPage")
const { yourCart } = require("../../support/PageObjects/yourCartPage")
const { checkoutInformation } = require("../../support/PageObjects/checkoutInformationPage")
const { checkoutOverview } = require("../../support/PageObjects/checkoutOverviewPage")
const tests = require("../../fixtures/validateInformationPaymenData.json")

describe("[US 008] Swag Labs | Checkout: Overview | Validate Information Payment", () => {    

    context("Test Cases Validate Information Payment", () => {

        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                cy.addProducts(test.products, test.list_page);
                cy.haveText(navbar.spanShoppingCart(), test.expected_quantity)
                cy.clickElement(navbar.btnShoppingCart())
                cy.clickElement(yourCart.btnCheckout())
                checkoutInformation.addYourInformation(test.first_name, test.last_name, test.postal_code)
                cy.clickElement(checkoutInformation.btnContinue())
                
                // Validation     
                cy.haveText(checkoutOverview.lblNumberCard(), test.card_number);
                cy.haveText(checkoutOverview.lblShipping(), test.shipping_information);
                cy.getAdditionPrices(checkoutOverview.lblPrice()).then((addition) => {
                    cy.getAmount(checkoutOverview.lblSubTotal()).then((value) => {
                        expect(addition).to.equal(value);
                    });
                })
                cy.calculateTax(checkoutOverview.lblSubTotal(), test.tax_percentage).then((tax) =>{
                    cy.getAmount(checkoutOverview.lblTax()).then((value) => {
                        expect(tax).to.equal(value)
                    });
                });
            });
        });

    });

});