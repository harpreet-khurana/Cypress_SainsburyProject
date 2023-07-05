class Login
{
    loginElements = {
        emailId : () => cy.get('#username'),
        password : () => cy.get('#password'),
        clickLoginbtn : () => cy.get("button[type='submit']"),
       // successCheck : () => cy.get(".homepageGreeting") 
        successCheck : () => cy.get("h1[data-test-id='my-account-title']") 
        
    }
    enterEmailId(eId)
    {
        this.loginElements.emailId().clear();
        this.loginElements.emailId().type(eId);
    }
    
    enterPassword(pwd)
    {
       // this.loginElements.password.clear();
        this.loginElements.password().type(pwd);
    }

    setClickLoginbtn()
    {
        this.loginElements.clickLoginbtn().click();
    }

}
export default Login;