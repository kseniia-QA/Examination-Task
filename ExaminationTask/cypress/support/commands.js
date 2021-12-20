Cypress.Commands.add('googleSearch', () => {
    cy.visit("https://www.google.com/")
    cy.get('input.gLFyf.gsfi').type('https://crtweb.ru').type('{enter}')


})
