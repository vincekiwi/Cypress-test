describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('http://the-internet.herokuapp.com/')

        cy.get('h1')
            .invoke('text')
            .should('equal', 'Welcome to the-internet')
    });
});