class ProductDetailPage {

    btnBackToProducts () {
        return "[data-test='back-to-products']";
    }

    lblTitleDetail () {
        return ".inventory_details_name";
    }

    lblPrice () {
        return ".inventory_details_price";
    }

    btnAddProduct () {
        return "[data-test^='add-to-cart']";
    }

    btnRemove () {
        return "[data-test^='remove']";
    }

}

export const productDetail = new ProductDetailPage;

