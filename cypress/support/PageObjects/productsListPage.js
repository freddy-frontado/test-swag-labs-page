class ProductsListPage {

    lblTitle () {
        return "span[class='title']";
    }

    dropDownList () {
        return '[data-test="product-sort-container"]';
    }

    optionValue (option) {
        return "[value='" + {option} + "']";
    }

    btnRemove () {
        return "[data-test^='remove']";
    }

    lblPricebar () {
        return ".inventory_item_description > .pricebar > .inventory_item_price";
    }

    async selectValue (option) {
        cy.selectOption(this.dropDownList(), option);
    }

}

export const productsList = new ProductsListPage;

