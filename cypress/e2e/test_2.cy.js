describe('4. Use an assertion library and verify that all the elements are present on the page.', () => {
  before('Pecode', () => {
    // 1. Open the page
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  })

  it('test', () => {

    cy.get(`[name=username]`)
      .should('be.visible')

    cy.get(`[name=password]`)  
      .should('be.visible')

    cy.get(`[value=Login]`)  
      .should('be.visible')

    cy.get('#logomini')  
      .should('be.visible')

    cy.get('h1')    
      .contains('AQA internship Login')
      .should('be.visible')
  
  });
});