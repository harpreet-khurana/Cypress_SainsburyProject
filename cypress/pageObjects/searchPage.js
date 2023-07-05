class searchPage{

    // searchElements = {
    //     //searchproduct : () =>  cy.get('[data-testid="search-term"]')
    //     searchproduct : () =>  cy.get('#search-bar-input')

    //}
     initialSearchGroceries = (query) => {
       //cy.get('#search-bar-input').type(query);
       //this.searchElements.searchproduct().clear();
       //this.searchElements.searchproduct().type(query);
       
       cy.get('[data-testid="search-term"]').clear();
       cy.get('[data-testid="search-term"]').type(query);
               
        cy.xpath("//button[@class='Searchstyles__Button-krbtke-6 bqGKiy']").click();
      }

      furtherSearchGroceries = (query) => {
        // cy.get("#term").type(query);
        cy.get('#search-bar-input').clear();
        cy.get('#search-bar-input').type(query);
        //this.searchElements.searchproduct().clear();
        //this.searchElements.searchproduct().type(query);
                       
         cy.xpath("//button[@class='Searchstyles__Button-krbtke-6 bqGKiy']").click();
       }

  
}
export default searchPage;

