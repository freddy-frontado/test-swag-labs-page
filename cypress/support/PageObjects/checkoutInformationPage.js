class CheckoutInformationPage {

    inputFirstName () {
        return "[data-test='firstName']";
    }

    inputLastName () {
        return "[data-test='lastName']";
    }

    inputPostalCode () {
        return "[data-test='postalCode']";
    }

    btnCancel () {
        return "[data-test='cancel']";
    }

    btnContinue () {
        return "[data-test='continue']";
    }

    errorMessage () {
        return "[data-test='error']";
    }

    async addYourInformation(firstName, lastName, postalCode) {
        cy.typeText(this.inputFirstName(), firstName);
        cy.typeText(this.inputLastName(), lastName);
        cy.typeText(this.inputPostalCode(), postalCode);
    }
    
}

export const checkoutInformation = new CheckoutInformationPage;