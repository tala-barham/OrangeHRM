import Login from "../PageObjects/LoginPage.js";
import Admin from "../PageObjects/AdminPage.js";

describe('Test admin page', () => {
  const loginobj=new Login();
  const adminobj=new Admin();
    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.wait(1000);
      cy.fixture('orangehrm.json').then((data) => {
        loginobj.setUserName(data.validUser.username)
        loginobj.setPassword(data.validUser.password)
        loginobj.clickSubmit();
        adminobj.clickAdminMenuItem();
      })
      });

      it("Add User",()=>{
        adminobj.clickAddButton();
        adminobj.clickSelectRole();
        adminobj.clickDropdownStatus();
        cy.fixture('orangehrm.json').then((data) => {
        adminobj.setEmployeeName(data.user.employeename)
        adminobj. chooseEmployee();
        adminobj.setUserName(data.user.userName)
        adminobj.setPassword(data.user.password)
        adminobj.setConfirmPassword(data.user.confirmPassword)
        })
        adminobj.clickSave();
        adminobj.verifyDone();
      })

      it("Add Invalid User",()=>{
        adminobj.clickAddButton();
        adminobj.clickSelectRole();
        adminobj.clickDropdownStatus();
        cy.fixture('orangehrm.json').then((data) => {
        adminobj.setEmployeeName(data.invalidUser4.employeename)
        adminobj.setUserName(data.invalidUser4.userName)
        adminobj.setPassword(data.invalidUser4.password)
        adminobj.setConfirmPassword(data.invalidUser4.confirmPassword)
          })
          adminobj.verifyErrorMessage();
      })
          it("Cancel Add User",()=>{
            adminobj.clickAddButton();
            adminobj.clickSelectRole();
            adminobj.clickDropdownStatus();
            cy.fixture('orangehrm.json').then((data) => {
            adminobj.setEmployeeName(data.user.employeename)
            adminobj.setUserName(data.user.userName)
            adminobj.setPassword(data.user.password)
            adminobj.setConfirmPassword(data.user.confirmPassword);
              })
              adminobj.clickCancel();
              adminobj.verifyDone();
            })
            it("Add User With Empty Fields",()=>{
                adminobj.clickAddButton();
                adminobj.clickSave();
                adminobj.verifyErrorMessagereq();
            })
            it("Search Valid User",()=>{
              cy.fixture('orangehrm.json').then((data) => {
                adminobj.setSearchUserName(data.searchValidUser.userName)
                adminobj.setEmployeeName(data.searchValidUser.employeeName)
                adminobj.chooseEmployeeSearch();
                  })
              adminobj.clickDropdownRoleOption();
              adminobj.chooseUserRole();
              adminobj.clickDropdownStatusSearh();
              adminobj.clickSearch();
              adminobj.verifySearch();
            })
            it("Search Invalid User",()=>{
              cy.fixture('orangehrm.json').then((data) => {
                adminobj.setSearchUserName(data.invalidUser4.userName)
                adminobj.setEmployeeName(data.invalidUser4.employeename)
                  })
              adminobj.clickDropdownRoleOption();
              adminobj.chooseUserRole();
              adminobj.clickDropdownStatusSearh();
              adminobj.clickSearch();
              adminobj. verifyErrorMessage();
            })
            it("Empty Searh",()=>{
              adminobj.clickSearch();
              adminobj.verifyEmpty();
            })
    });