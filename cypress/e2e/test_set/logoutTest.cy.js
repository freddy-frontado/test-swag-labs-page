/// <reference types="cypress"/>

const { navbar } =require("../../support/PageObjects/navabrPage")
const { login } = require("../../support/PageObjects/loginPage")
const tests = require("../../fixtures/logoutData.json")

describe("[US 002] Swag Labs | Account | Logout", () =>{   

    context("Test Cases Logout", () => {

        const user = Cypress.env('standard_user');
        const password = Cypress.env('password');

        beforeEach(() => {
            cy.login(user, password);
        });

        tests.forEach(test => {
            it(test.name, () => {
                cy.havePath(test.path);
                cy.clickElement(navbar.btnMenu());
                cy.clickElement(navbar.btnLogout());
    
                // Validation
                cy.containText(login.title(), test.expected_title);
            });
        });
    });
});
