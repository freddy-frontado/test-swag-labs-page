class NavbarPage {

    lblTitle () {
        return ".title";
    }

    btnMenu () {
        return "#react-burger-menu-btn";
    }

    btnAllItems () {
        return "#inventory_sidebar_link";
    }

    btnAbout () {
        return "#about_sidebar_link";
    }

    btnLogout () {
        return "#logout_sidebar_link";
    }

    btnReset () {
        return "#reset_sidebar_link";
    }

    titleLogo () {
        return ".app_logo";
    }

    btnShoppingCart () {
        return ".shopping_cart_link";
    }

    spanShoppingCart () {
        return ".shopping_cart_badge";
    }

}

export const navbar = new NavbarPage;