class CheckoutOverviewPage {

    divContainerList () {
        return ".cart_list";
    }

    lblProductName () {
        return ".inventory_item_name";
    }

    lblPrice () {
        return ".inventory_item_price";
    }

    lblNumberCard () {
        return ".summary_info > :nth-child(2)";
    }   

    lblShipping () {
        return ".summary_info > :nth-child(4)";
    }

    lblTax () {
        return ".summary_tax_label";
    }

    lblSubTotal () {
        return ".summary_subtotal_label";
    }

    lblTotal () {
        return ".summary_total_label";
    }

    btnFinish () {
        return "[data-test='finish']";
    }

    btnCancel () {
        return "[data-test='cancel']";
    }

}

export const checkoutOverview = new CheckoutOverviewPage;

