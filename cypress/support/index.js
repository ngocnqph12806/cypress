// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// import screen 081
import { _081_login } from './../../screen/081_login'

beforeEach(() => {
    // read file data_081_login in folder data in fixtures
    cy.fixture("data/data_081_login").then(login => {
        // parametter login
        _081_login(login.username, login.password, "LOGIN");
        // check url target after login success
        cy.url().should('include', login.target);
    })
})