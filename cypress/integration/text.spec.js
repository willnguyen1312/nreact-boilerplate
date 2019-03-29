/// <reference types="Cypress" />
/// <reference types="cypress-testing-library" />

context('Text', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should verify the content existed', () => {
    cy.queryByText('Hello there').should('exist');
  });
});
