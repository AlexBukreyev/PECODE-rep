let creed = require('../support/environment_file.json')

describe('6. Create a test case that will fail because of unsuccessful login.', () => {
  before('Pecode', () => {
    // 1. Open the page
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  })

  it('test', () => {

  cy.get(`[name=username]`)
    .type(creed.login)

  cy.get(`[name=password]`)
    .type(creed.password)

  cy.get(`[value=Login]`)
    .click()

  cy.get(':nth-child(1) > .help-block')
    .should('have.not.text', 'No account found with that username.')    
       
  });
});