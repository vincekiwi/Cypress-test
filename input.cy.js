// Adds suggestions for Cypress commands
/// <reference types="cypress" />

import * as should from 'should';

describe('text box input', () => {
    it('allows the user to enter text', () => {
        cy.visit('http://the-internet.herokuapp.com/inputs');

        cy.get('input')
            .should('contain', '');
        
        cy.get('input').type('10');
        // .type('{Esc}'); <simulates the user pressing the esc key>
            
        cy.get('input')
            .should('contain', '10');
    });
});