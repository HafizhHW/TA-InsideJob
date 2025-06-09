class Logins {
    
    // Object Login
    // fldUsername = '#user-name'
    fldUsername = '[data-test="username"]'
    fldPassword = '[data-test="password"]'
    btnLogin = '[data-test="login-button"]'
    errMsgContainer = '.error-message-container'

    // Aksi Login
    aksiLogin(){
        // cy.get(this.fldUsername, { timeout: 10000 }).type('standard_user');
        cy.get(this.fldUsername).type('standard_user')
        cy.get(this.fldPassword).type('secret_sauce')
        cy.get(this.btnLogin).click()
    }

}
export default Logins