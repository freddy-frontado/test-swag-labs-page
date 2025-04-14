/// <reference types="cypress"/>

const { navbar} = require("../../support/PageObjects/navabrPage")
const { yourCart } = require("../../support/PageObjects/yourCartPage")
const { checkoutInformation } = require("../../support/PageObjects/checkoutInformationPage")
const { checkoutOverview } = require("../../support/PageObjects/checkoutOverviewPage")
const { checkoutComplete } = require("../../support/PageObjects/checkoutCompletePage")
const tests = require("../../fixtures/confirmPurchaseData.json")

describe("[US 009] Swag Labs | Checkout: Overview | Confirm purchase", () => {

    context("Test Cases Confirm Purchase", ()=> {

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
                cy.clickElement(checkoutOverview.btnFinish())
    
                // Validation
                cy.haveText(checkoutComplete.lblMessageSuccess(), test.expected_text)
                cy.elementExist(checkoutComplete.btnBackHome())
            });
        });
    })
});

