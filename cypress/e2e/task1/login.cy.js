describe('Login Tests - Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login Test 1: valid credentials should land on dashboard', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('be.visible')
    cy.url().should('include', '/inventory')
    cy.screenshot('dashboard-after-login', { clip: { x: 0, y: 0, width: 1280, height: 720 } })
  })

  it('Login Test 2: wrong password should show error message', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword123')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('error-message-wrong-password', { clip: { x: 0, y: 0, width: 1280, height: 720 } })
  })

  it('Login Test 3: empty fields should show validation message', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
    cy.screenshot('error-message-empty-fields', { clip: { x: 0, y: 0, width: 1280, height: 720 } })
  })

})