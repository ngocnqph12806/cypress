describe('abc', () => {

    it('fails with custom message via overwrite of should', () => {
        cy.visit('http://123.25.21.145:1405/worker/login?storeId=1');
        // cy.get("#comment").should('eq', 1, { message: 'custom error message 1' })


        //expect  VS actual
        expect("lây trong properrties").to.equal("ket qua chạy method test")
    })

});
