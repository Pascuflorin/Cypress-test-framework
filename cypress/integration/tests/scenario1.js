
const titleOurSolutions=".container.container--product-header  h1"

describe('It should verify the title', () => {
    it('verify title value', () => {
        cy.visit("https://airportlabs.com")
        cy.get(titleOurSolutions).should('have.text', 'Our Solutions')
    });

    it('verify title font', () => {
        cy.get(titleOurSolutions).should('have.css', 'font-size','42px')
        
    });
    it('verify title style', () => {
        cy.get(titleOurSolutions).should('have.css', 'color', 'rgb(0, 23, 72)')
   
    });
});