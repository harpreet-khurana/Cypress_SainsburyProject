import searchPage from "../pageObjects/searchPage";
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('search',() =>{ before(function() {

    //execute once before any test case
    cy.visit('https://www.sainsburys.co.uk/');       // open page
    cy.get('#onetrust-accept-btn-handler').click();  // Cookies banner
    cy.title().should('contain', "Sainsbury's");    //verify the title
  
})

 
// happy path - search success
    it('searchProduct', () => {
      
        const searchObj = new searchPage();
        searchObj.initialSearchGroceries("apples");

        cy.get('.si__title').should('be.visible');
        cy.get('.si__title').should('contain', 'apples');
           
        })

// this is to validate the results , correct items are displayed
    it.skip('featuredListCheck', () =>{

        cy.xpath("div[class='SRF__tileList']>ul[class='ln-o-grid ln-o-grid--matrix ln-o-grid--equal-height']");
        
     //cy.get("ul[class='ln-o-grid ln-o-grid--matrix.ln-o-grid--equal-height']>li[class='pt__info__description'][data-test-id='product-tile-description']").each( ($el, index, $list)=>{
       //       if($el.text().should('contain','apples')){
         //         cy.log($el.text());
           // }

        })
    })

//this is to test the autosuggestion when user enter the search text
    it.skip('searchInputSuggestions', () =>{

            const searchObj = new searchPage();
            searchObj.searchGroceries("apples"); 
            cy.get('.ln-c-dropdown-list__item.ln-c-dropdown-list__item--align-center').contains('apples').click();  
        })

//this is to validate 0 results found if user selects something after first success results
it.skip('noResultsFoundForSearch', () =>{
        cy.wait(3000);
        const searchObj2 = new searchPage();
        searchObj2.furtherSearchGroceries("Hospital");
        cy.get('.si__title').should('be.visible');
        cy.get('.si__title').should('contain', '0 results');

})

    
    

