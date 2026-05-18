describe('Form Test - Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Form Test 1: fill checkout form and assert order summary appears', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Ali')
    cy.get('#last-name').type('Khan')
    cy.get('#postal-code').type('54000')
    cy.get('#continue').click()
    cy.get('.summary_info').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')
  })

})