class Admin{

  element={
    btnMenue:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
    btnAdd:()=>cy.get('.oxd-button--medium'),
    btnDown:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
    txtEmployeeName:()=>cy.get('.oxd-autocomplete-text-input > input'),
    txtUserName:()=>cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    txtPassword:()=>cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
    txtConfirmPassword:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    btnSave:()=>cy.get('.oxd-button--secondary'),
    adminRole:()=>cy.get('.oxd-select-option'),
    statusDropdown:()=>cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
    enableStatus:()=>cy.get('.oxd-select-option'),
    txtEmoloyee:()=>cy.get('.oxd-autocomplete-option span'),
    msg:()=>cy.get('.oxd-topbar-header-breadcrumb-level'),
    invmsg:()=>cy.get('.oxd-input-group > .oxd-text'),
    btnCancel:()=>cy.get('.oxd-button--ghost'),
    regmsg:()=>cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text'),
    btnSearch:()=> cy.get('.oxd-form-actions > .oxd-button--secondary'),
    userName:()=>cy.get(':nth-child(2) > .oxd-input'),
    dropDownRoleOption:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
    dropDownStatusSearch:()=>cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
    searchDone:()=>cy.get('.oxd-table-card > .oxd-table-row'),
    emptyMsg:()=> cy.get('.orangehrm-container'),
  }

    clickAdminMenuItem() {
       this.element.btnMenue().click();
      }
      clickAddButton() {
        this.element.btnAdd().contains('Add').click();
      }
      clickSelectRole() {
        this.element.btnDown().click();
        this.element.adminRole().contains('Admin').click();
      }
      setEmployeeName(name){
        this.element.txtEmployeeName().type(name);  
        } 
        chooseEmployee(){
          cy.contains(this.txtEmoloyee,'ana sol jerrez').click();
        }
        setUserName(name){
            this.element.txtUserName().type(name);  
            }
        setPassword(pass){
           this.element.txtPassword().type(pass);
        }
        setConfirmPassword(passc){
           this.element.txtConfirmPassword().type(passc);
        }
        clickDropdownStatus(){
            this.element.statusDropdown().click();
            cy.contains(this.enableStatus,'Enabled').click();
        }
        clickSave(){
          this.element.btnSave().click();
          cy.wait(1000);
      }
      verifyDone(){
        this.element.msg().should('exist');
      }
      verifyErrorMessage() {
       this.element.invmsg().should('be.visible');
      }
      clickCancel(){
        this.element.btnCancel().click();
      }  
      verifyErrorMessagereq() {
        this.element.regmsg().should('be.visible');
       }
       clickSearch(){
        this.element.btnSearch().click({ force: true });
       }
       setSearchUserName(name){
        this.element.userName().type(name);
       }
       clickDropdownRoleOption(){
        this.element.dropDownRoleOption().click();
       }
       chooseUserRole(){
        this.element.adminRole().contains('Admin').click();
       }
       clickDropdownStatusSearh(){
        this.element.dropDownStatusSearch().click();
        cy.contains(this.enableStatus,'Enabled').click();
       }
       chooseEmployeeSearch() {
        cy.contains(this.txtEmoloyee, 'Kalki Automationwala Tester')
          .should('be.visible')
          .click();
      }
      verifySearch(){
        this.element.searchDone().should('exist');
      }
      verifyEmpty(){
       this.element.emptyMsg().should('exist');  
      }
}
export default Admin;