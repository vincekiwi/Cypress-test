describe('Basic page interaction', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/');
    });

    it('Adds an element', () => {
        cy.get('button').click();

        cy.get('#elements > button')
            .invoke('text')
            .should('equal', 'Delete')
    });

    it('Removes an element', () => {
        cy.get('button').click();
    

        cy.get('#elements > button').click();
        // .debug <must have dev tools open>
        cy.get('#elements > button')
           .should('not.exist');
    });
});