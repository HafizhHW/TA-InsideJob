class addProduct {
    //Object CheckOut

    // addItem = '[data-test="add-to-cart-sauce-labs-backpack"]'
    // IconAddCard = '.btn.btn_primary.btn_small.btn_inventory';
    // iconShoppingCart = '.shopping_cart_link';
    goToCart = '[data-test="shopping-cart-link"]';
    checkoutBtn = '[data-test="checkout"]';
    firstName = '[data-test="firstName"]';
    lastName = '[data-test="lastName"]';
    postalCode = '[data-test="postalCode"]';
    continue = '[data-test="continue"]';
    finish = '[data-test="finish"]';


    // Aksi Klik di Add Product

    additem() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.wait(500)
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.wait(500)
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.wait(500)
        // cy.get(this.goToCart).click();
        cy.get(this.goToCart).should('be.visible').click();
        cy.wait(500)
        // cy.get(this.chekoutBtn).click();
        cy.get(this.checkoutBtn).should('be.visible').click();
        cy.wait(500)
        cy.get(this.firstName).type('John')
        cy.get(this.lastName).type('Doe')
        cy.get(this.postalCode).type('12345')
        cy.wait(500)
        cy.get(this.continue).should('be.visible').click();
        cy.wait(500)
        cy.get(this.finish).should('be.visible').click();
    }

    // goToCart() {
    //     cy.get(this.goToCart).should('be.visible').click();
    // }

    // checkout() {
    //     cy.get(this.checkoutBtn).should('be.visible').click();
    // }

    // toCart() {
    //     // cy.get(this.IconAddCard).eq(5).click();
    //     // cy.get(this.IconAddCard).eq(1).click();
    //     // cy.get(this.IconAddCard).eq(2).click();
    //     // cy.get(this.iconShoppingCart).should('be.visible').and('contain.text', '3');
    //     // cy.get(this.iconShoppingCart).click();
    //     // 
    //     // cy.get(this.IconAddCard).eq(5).click();
    //     // cy.get(this.IconAddCard).eq(1).click();
    //     // cy.get(this.IconAddCard).eq(2).click();
    //     cy.get(this.goToCart).should('be.visible');
    //     cy.get(this.goToCart).click();
    //     // 
    //     // cy.get('[data-test="shopping-cart-link"]').click();
    //     // cy.get(this.goToCart).should('content','[data-test="shopping-cart-link"]').click();
    // }
}
export default addProduct;
