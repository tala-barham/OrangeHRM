class Login{

    element={
    txtUserName:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    txtPassword:()=>cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    btnSubmit:()=>cy.get('button[type="submit"]'),
    msg:()=>cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
    errmsg:()=>cy.get('.oxd-alert-content--error'),
    reqmsg:()=>cy.get('.oxd-input-field-error-message'),
    }
    setUserName(username){
    this.element.txtUserName().type(username);
    }

    setPassword(password){
       this.element.txtPassword().type(password);
        }

    clickSubmit(){
        this.element.btnSubmit().click();
    }    

    verifyLogin(){
        this.element.msg().should('have.text','Dashboard');
    }

    verifyErrorMessage() {
       this.element.errmsg().should('be.visible');
      }

      verifyRequiredErrorMessageExists() {
        this.element.reqmsg().should('be.visible');
      }   
}
export default Login;
