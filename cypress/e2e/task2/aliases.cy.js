describe('Aliases, Custom Command and beforeEach - Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Alias practice: save inputs as alias and reuse them', () => {
    cy.get('#user-name').as('usernameField')
    cy.get('#password').as('passwordField')
    cy.get('@usernameField').type('standard_user')
    cy.get('@passwordField').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('be.visible')
    cy.screenshot('alias-login-success', { clip: { x: 0, y: 0, width: 1280, height: 720 } })
  })

  it('Custom command: login() command works correctly', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.inventory_list').should('be.visible')
    cy.contains('Products').should('be.visible')
    cy.screenshot('custom-command-login', { clip: { x: 0, y: 0, width: 1280, height: 720 } })
  })

  it('Negative assertion: error element does not exist on fresh page load', () => {
    cy.get('[data-test="error"]').should('not.exist')
  })

  it('cy.contains() bonus: find hint text by content and assert it exists', () => {
    cy.contains('Accepted usernames are:').should('be.visible')
    cy.contains('Login').should('be.visible')
  })

})