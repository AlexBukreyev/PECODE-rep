let creed = require('../support/environment_file.json')

describe('2-3. Create file and fill fields', () => {
  before('Pecode', () => {
    // 1. Open the page
    cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
  })

  it('test', () => {

    //
    cy.get(`[name=username]`)
      .type(creed.login)

    cy.get(`[name=password]`)
      .type(creed.password)

    cy.get(`[value=Login]`)
      .click()    

  });
});