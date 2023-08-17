import Login from "../PageObjects/LoginPage.js";

describe('Orangehrm Login Test', () => {
  const ln=new Login();
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it('ValidLogin',()=>{
      cy.fixture('orangehrm.json').then((data) => {
      ln.setUserName(data.validUser.username)
      ln.setPassword(data.validUser.password)
      ln.clickSubmit();
      ln.verifyLogin();
    })
    })

    it('Login With Invalid UserName',()=>{
      cy.fixture('orangehrm.json').then((data) => {
      ln.setUserName(data.invalidUser.username)
      ln.setPassword(data.invalidUser.password)
      ln.clickSubmit();
      ln.verifyErrorMessage();
    })
    })

    it('Login With Invalid Password',()=>{
      cy.fixture('orangehrm.json').then((data) => {
      ln.setUserName(data.invalidUser2.username)
      ln.setPassword(data.invalidUser2.password)
      ln.clickSubmit();
      ln.verifyErrorMessage();
    })
    })

    it('Login With EmptyFields ',()=>{
      ln.clickSubmit();
      ln.verifyRequiredErrorMessageExists();
    })

    it.only('Login With Long Username ',()=>{
      cy.fixture('orangehrm.json').then((data) => {
        ln.setUserName(data.invalidUser3.username)
        ln.setPassword(data.invalidUser3.password)
        ln.clickSubmit();
        ln.verifyErrorMessage();
    })
  })
})