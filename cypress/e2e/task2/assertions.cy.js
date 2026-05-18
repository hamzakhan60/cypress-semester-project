describe('Assertion Practice - Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Assertion 1: login button should be visible (be.visible)', () => {
    cy.get('#login-button').should('be.visible')
  })

  it('Assertion 2: page heading text should match (have.text)', () => {
    cy.get('.login_logo').should('have.text', 'Swag Labs')
  })

  it('Assertion 3: username input should have placeholder attribute (have.attr)', () => {
    cy.get('#user-name').should('have.attr', 'placeholder', 'Username')
  })

  it('Negative Assertion: error message should NOT exist on fresh page load', () => {
    cy.get('[data-test="error"]').should('not.exist')
  })

})