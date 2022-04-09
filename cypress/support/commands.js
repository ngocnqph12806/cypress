// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import screen 081
Cypress.Commands.overwrite('should', (originalFn, actual, assertion, expected, options) => {
    if (options && options.message) {
        const listener = (error, runnable) => {
            error.name = 'CustomError'
            error.message = options.message
            throw error // throw error to have test still fail
        }
        const removeListener = () => {
            cy.removeListener('fail', listener)
            cy.removeListener('command:end', removeListener)
        }
        cy.on('fail', listener)
        cy.on('command:end', removeListener)
    }

    return originalFn(actual, assertion, expected, options)
})