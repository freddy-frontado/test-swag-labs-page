// command: typeText
Cypress.Commands.add("typeText", (element, text) => {
    if(text != "") {
        cy.get(element).type(text)        
    } else {
        cy.get(element).clear()
    }    
})

// command: clickElement
Cypress.Commands.add("clickElement", (element) => {
    cy.get(element).click()
})

// command: clickForse
Cypress.Commands.add("clickForse", (element) => {
    cy.get(element).click({ force: true })
})

// command: selectOption
Cypress.Commands.add("selectOption", (element, option) => {
    cy.get(element).select(option)
})

// comman: login
Cypress.Commands.add("login", (email, password) => {
    cy.visit("/");
    cy.get("#user-name").type(email)
    cy.get("#password").type(password)
    cy.get("[name='login-button']").click()
})

// command: haveText
Cypress.Commands.add("haveText", (element, text) => {
    cy.get(element).should("have.text", text)
})

// command: containText
Cypress.Commands.add("containText", (element, text) => {
    cy.get(element).should("contain", text)
})

// command: havePath
Cypress.Commands.add("havePath", (path) => {
    cy.location("pathname").should("equal", path)
})

// command: addProducts
Cypress.Commands.add("addProducts", (products) => {
    products.forEach((product) => {
        cy.get(".inventory_item_name").each((item, index) => {
            let text = item.text()
            if(text.includes(product)) {
                if(products.length > 1) {
                    cy.get("[data-test^='add-to-cart']").eq(index).click()
                } else {
                    cy.get(".inventory_item_name").eq(index).click()
                    cy.get("[data-test^='add-to-cart']").click()
                }
            }
        });
    });
});

// command: removeProducts
Cypress.Commands.add("removeProducts", () => {
    cy.get("[data-test^='remove']").each((item, index) =>{
        let text = item.text()
        if(text === "Remove") {
            cy.get("[data-test^='remove']").eq(0).click()
        }
    });
});

// command: elementExist
Cypress.Commands.add("elementExist", (element) => {
    cy.get(element).should("exist");
});

// command: comparateTextsElements
Cypress.Commands.add("comparateTextsElements", (element1, element2) => {
    cy.get(element1).invoke('text').then((text1) => {
        cy.get(element2).invoke('text').then((text2) => {
        expect(text1.trim()).to.equal(text2.trim());
        });
    });
});

// command: getAmount
Cypress.Commands.add("getAmount", (element) => {
    cy.get(element).invoke("text").then((text) => {
        const str = text.length
        const position = text.indexOf("$")
        const string = text.slice(position - str + 1)
        return parseFloat(string)
    });
});

// command: getAdditionPrices
Cypress.Commands.add("getAdditionPrices", (elements) => {  
    const array = []
    let addition = 0
    cy.get(elements).each((element) => {        
        const text = element.text()
        const value = parseFloat(text.slice(1))        
        addition += value
        array.push(value)
    }).then(() => {
        return addition
    });
});

// command: calculateTax -- % TAX: 0,0800640512409928
Cypress.Commands.add("calculateTax", (element, percentage) => {
    cy.getAmount(element).then((value) => {
        const tax = value*percentage
        return parseFloat(tax.toFixed(2))
    });
});

// command: determineOrderPrice
Cypress.Commands.add("determineOrderPrice", (elements) => {
    const array = []    
    cy.get(elements).each((element) => {
        const text = element.text()
        const value = parseFloat(text.slice(1))
        array.push(value)
    }).then(() => {
        let order;
        for (let i = 0; i < array.length -1; i++) {
            if(array[i] > array[i + 1]) {
                order = "Descending"
                break;
            } else if (array[i] < array[i + 1]) {
                order = "Ascending"
                break;
            }
        }
        if (!order) {
            order = "Constant"
        }
        return order     
    });
});

