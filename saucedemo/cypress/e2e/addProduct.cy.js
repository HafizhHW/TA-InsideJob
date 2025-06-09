// import addProduct from "../support/Object/addProduct";

// const addproduct = new addProduct();

// describe('cek login dulu', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.wait(500); 
//         cy.get('#password').type('secret_sauce')
//         cy.wait(500); 
//         cy.get('#login-button').click()
//         cy.wait(500); // Tunggu 1 detik
//     })

//     it('Tambah Product', () => {
//         addproduct.additem();
//         addproduct.goToCart(); // Pergi ke keranjang
//         // cy.wait(500); // Tunggu jika perlu
//         addproduct.checkout(); // Lanjut ke checkout
//     })

//     // it('cek keranjang', () => {
//     //     addproduct.toCart();
//     // })

// })

// Pengujian
import addProduct from "../support/Object/addProduct";

const addproduct = new addProduct();

describe('cek login dulu', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        // cy.url().should('include', '/inventory.html'); // Menunggu URL berubah
    });

    it('Tambah Product', () => {
        addproduct.additem();
        // addproduct.goToCart(); // Pergi ke keranjangtc   
        // addproduct.checkout(); // Lanjut ke checkout
    });

    // it('cek keranjang', () => {
    //     addproduct.toCart();
    // });
});