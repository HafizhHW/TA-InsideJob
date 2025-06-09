// file object
class addProduct {
    //Object CheckOut

    goToCart = '[data-test="shopping-cart-link"]';
    checkoutBtn = '[data-test="checkout"]';
    firstName = '[data-test="firstName"]';
    lastName = '[data-test="lastName"]';
    postalCode = '[data-test="postalCode"]';
    continue = '[data-test="continue"]';
    finish = '[data-test="finish"]';


    // Aksi Checkout

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
        cy.wait(1000)
        cy.get(this.continue).should('be.visible').click();
        cy.wait(500)
        cy.get(this.finish).should('be.visible').click();
    }

}
export default addProduct;
