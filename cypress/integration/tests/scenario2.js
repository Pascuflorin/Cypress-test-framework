
const screensLiveNumber=".product--va.product-wp > .container  .product__stats > div:nth-of-type(1) > .stats__num"
const screensLiveDescription = ".product--va.product-wp > .container  .product__stats > div:nth-of-type(1) > .stats__desc"

describe('It should verify the screens live static', () => {
    it('verify value', () => {
        cy.visit("https://airportlabs.com")
        cy.get(screensLiveNumber).should('have.text', '5.1K');
        cy.get(screensLiveDescription).should('have.text', 'Screens live \n in 6 Airports');
    });
    it('verify font', () => {
        // cy.get(titleOurSolutions).should('have.css', 'font-size;','42px')
        cy.get(screensLiveNumber).should('have.css', 'font-size','42px')
        cy.get(screensLiveDescription).should('have.css', 'font-size','14px')
    });
    it('verify style', () => {
        cy.get(screensLiveNumber).should('have.css', 'font-size','42px')
        cy.get(screensLiveDescription).should('have.css', 'font-size','14px')
   
    });
});