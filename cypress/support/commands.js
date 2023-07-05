// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('Assertions', () => {
    cy.get('.si__title').contains("23 results for 'Apples'").should('be.visible');
    cy.get('.multi-search > span').click();
    cy.get('#search-bar-input').type('Hospital{enter}');
    cy.get('.si__title').contains("0 results for 'Hospital'").should('be.visible');
  });