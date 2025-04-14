class CheckoutCompletePage {

    lblMessageSuccess () {
        return ".complete-header";
    }

    btnBackHome () {
        return "[data-test='back-to-products']";
    }

}

export const checkoutComplete = new CheckoutCompletePage;