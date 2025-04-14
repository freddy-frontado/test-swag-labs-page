class LoginPage {

    title () {
        return ".login_logo";
    }

    usernameInput() {
        return "#user-name";
    }

    passwordInput() {
        return "#password";
    }

    submitButton () {
        return "[name='login-button']";
    }

    errorMessage() {
        return "[data-test='error']";
    }
    
    async login(user, password) {
        cy.typeText(this.usernameInput(), user);
        cy.typeText(this.passwordInput(), password);
        cy.clickElement(this.submitButton());
    }
    
}

export const login = new LoginPage;