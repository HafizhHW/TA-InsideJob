import Login from "../../support/Object/PageLogin/LoginPages";
// import LoginPages from "../../support/Object/PageLogin/LoginPages"

const Log = new Login ();

describe('Login Pages', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login', () => {
    Log.aksiLogin();
    })
})


// describe('Login Pages', () => {
//   it('Login passes', () => {
//     cy.visit('https://www.saucedemo.com/')
//     // cy.get('[data-test="username"]').type('standard_user')
//     // cy.get('[data-test="password"]').type('secret_sauce')
//     // cy.get('[data-test="login-button"]').click()
//   })
// })

// import Logins from "../../support/Object/PageLogin/LoginPages";

// const logins = new Logins();

// describe('Login Pages', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//     });

//     it('should login successfully', () => {
//         logins.aksiLogin();
//         cy.get('.inventory_list').should('be.visible'); // Memverifikasi bahwa login berhasil
//     });
// });