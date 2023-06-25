describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')

        cy.get('#content')
            .as('contentHeader');

        cy.get('@contentHeader')
            .find('h3')
            .should('be.visible')
            .and('contain', 'Add/Remove Elements');
    });
});