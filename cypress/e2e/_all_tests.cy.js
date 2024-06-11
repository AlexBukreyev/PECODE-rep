let creed = require('../support/environment_file.json')

describe('Test', () => {
  before('Pecode', () => {
    // 1. Open the page
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  })

  it('test', () => {

    //2-3. Create file and fill fields
    cy.get(`[name=username]`)
      .type(creed.login)

    cy.get(`[name=password]`)
      .type(creed.password)

    cy.get(`[value=Login]`)
      .click()

    //4. Use an assertion library and verify that all the elements are present on the page.
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

    // 5. Verify that all the error messages appear.
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
       
    //6. Create a test case that will fail because of unsuccessful login.
    cy.get(`[name=username]`)
    .type(creed.login)

  cy.get(`[name=password]`)
    .type(creed.password)

  cy.get(`[value=Login]`)
    .click()



  });
});