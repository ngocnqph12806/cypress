// import screen 047
const { _047 } = require('../../../screen/047_カウンセリングを受ける施術を選択');

// import file json to variable
const testVariable = require('../../fixtures/data/data_047_カウンセリングを受ける施術を選択.json');

describe('Test screen 047_カウンセリングを受ける施術を選択', () => {

    // use loop create test case
    testVariable.forEach(obj => {
        // obj.name --name test case
        it(obj.name, () => {
            // point to the corresponding path of the screen
            cy.visit('/worker/reservation/counseling/operationType?');
            // parametter input screen 047
            _047(obj.operationType, obj.buttonName);
            // check url targer after click obj.button
            cy.url().should('include', obj.target);
        })
    })

})