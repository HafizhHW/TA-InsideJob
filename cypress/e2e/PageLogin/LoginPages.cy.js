import Login from "../../support/Object/PageLogin/LoginPages";
// import LoginPages from "../../support/Object/PageLogin/LoginPages"

const Log = new Login ();

// describe('Login Pages', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/')
//     })

//     it('Login', () => {
//         Log.aksiLogin();  // Lakukan login
//     })

//     it('Verifikasi btn Menu', () => {
//         // Pastikan untuk melakukan login sebelum memverifikasi
//         Log.aksiLogin();  // Lakukan login lagi
//         Log.klikMenu();   // Klik menu setelah login
//     })
// })

describe('Login Pages', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login', () => {
    Log.aksiLogin();
    Log.klikMenu();
    })

})
