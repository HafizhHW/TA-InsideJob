class Logins {
    
    // Object Login
    // fldUsername = '#user-name'
    fldUsername = '[data-test="username"]'
    fldPassword = '[data-test="password"]'
    btnLogin = '[data-test="login-button"]'
    errMsgContainer = '.error-message-container'
    btn_menu = '.bm-burger-button'
    // btn_menu = '#react-burger-menu-btn'

    // Aksi Login
    aksiLogin(){
        // cy.get(this.fldUsername, { timeout: 10000 }).type('standard_user');
        cy.get(this.fldUsername).type('standard_user')
        cy.get(this.fldPassword).type('secret_sauce')
        cy.get(this.btnLogin).click()
    }

    klikMenu() {
    cy.get(this.btn_menu).click()
    }
}
export default Logins