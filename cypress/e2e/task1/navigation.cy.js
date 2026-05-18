describe('Navigation Tests - Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Navigation Test 1: clicking menu shows sidebar links', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible')
    cy.url().should('include', '/inventory')
  })

  it('Navigation Test 2: visit inventory then cart, assert headings match', () => {
    cy.contains('Products').should('be.visible')
    cy.get('.shopping_cart_link').click()
    cy.contains('Your Cart').should('be.visible')
    cy.url().should('include', '/cart')
    cy.screenshot('cart-page-heading')
  })

})