export const _081_login = (username, password, buttonName) => {
    cy.visit('/worker/login?storeId=1')
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button').contains(buttonName).click();
}