import loginPage from "../pageObjects/loginPage.js";

describe('login', () => {

    beforeEach(function() {

        //execute before each test case
        cy.visit('https://account.sainsburys.co.uk/gol/login?login_challenge=722a707da78b4484a3b5e6ff70d535fe');       // open accounts login page   
        cy.get('#onetrust-accept-btn-handler').click();  // Cookies banner

    })

    it('loginSuccess', () => {

        const loginObj = new loginPage();
        loginObj.enterEmailId('harpreet3@gmail.com');
        loginObj.enterPassword('&c+df5KAUW7@^Mc');
        cy.wait(2000);
        loginObj.setClickLoginbtn();
        cy.wait(3000);
        cy.get('.loggedInContactName').click();
        loginObj.loginElements.successCheck().should('contain','Welcome');
     })

     it.skip('loginFail', () => {
        //code for failed login and errors

     })
     
})
  




