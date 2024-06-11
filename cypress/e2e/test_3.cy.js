describe('5. Verify that all the error messages appear.', () => {
  before('Pecode', () => {
    // 1. Open the page
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  })

  it('test', () => {

    cy.get(`[name=username]`)
      .clear()

      cy.get(`[name=password]`)  
      .clear()

    cy.get(`[value=Login]`)
      .click()

    cy.get(':nth-child(1) > .help-block')
      .should('have.text', 'Please enter username.')

    cy.get(':nth-child(2) > .help-block')  
      .should('have.text', 'Please enter your password.')
       
  });
});