class Login{
    txtUserName='input[placeholder="Username"]';
    txtPassword='input[placeholder="Password"]';
    btnSubmit='button[type="submit"]';
    msg='.oxd-topbar-header-breadcrumb > .oxd-text';
    errmsg='.oxd-alert-content--error';
    reqmsg='.oxd-input-field-error-message';

    setUserName(username){
    cy.get(this.txtUserName).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
        }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }    

    verifyLogin(){
        cy.get(this.msg).should('have.text','Dashboard');
    }

    verifyErrorMessage() {
        cy.get(this.errmsg).should('be.visible');
      }

      verifyRequiredErrorMessageExists() {
        cy.get(this.reqmsg).should('be.visible');
      }   
}
export default Login;
