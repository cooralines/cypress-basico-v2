Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Caroline')
    cy.get('#lastName').type('Almeida')
    cy.get('#email').type('cooralines.almeida@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})