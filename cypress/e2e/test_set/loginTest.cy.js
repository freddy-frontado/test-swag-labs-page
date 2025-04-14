/// <reference types="cypress"/>

const { login } = require("../../support/PageObjects/loginPage");
const { productsList } = require("../../support/PageObjects/productsListPage")
const tests = require("../../fixtures/loginData.json")

describe("[US 001] Swag Labs | Account | Login", () => {

    context("Test Cases Login Page", () => {

        beforeEach(() => {
            cy.visit("/");
        });
    
        tests.forEach(test => {
            it(test.name, () => {
                cy.typeText(login.usernameInput(), test.user_name);
                cy.typeText(login.passwordInput(), test.password);
                cy.clickElement(login.submitButton());
    
                // Validation
                if(test.name === "TC01-Should login to inventory page") {
                    cy.haveText(productsList.lblTitle(), test.expected)
                } else {
                    cy.containText(login.errorMessage(), test.expected)
                }
            });
        });
    });
});
