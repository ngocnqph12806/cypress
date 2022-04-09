export const _047 = (operationType, buttonName)=>{
    cy.get('#operationTypeId' + operationType).click({ force: true });
    cy.get('button').contains(buttonName).click();
}