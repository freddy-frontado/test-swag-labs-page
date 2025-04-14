class YourCartPage {

    lblInventoryName () {
        return ".inventory_item_name";
    }

    btnRemove () {
        return "[data-test^='remove']";
    }

    btnCheckout () {
        return "[data-test='checkout']";
    }

    btnContinueShopping () {
        return "[data-test='continue-shopping']";
    }

    lblPrice () {
        return ".inventory_item_price";
    }

}

export const yourCart = new YourCartPage;