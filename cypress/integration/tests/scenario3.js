const getInTouch = ".footer__item-wp > div:nth-of-type(1) > span"

describe('Verify Get in touch section', () => {
    it('', () => {
        cy.visit("https://airportlabs.com")
        cy.get(getInTouch).click()
    });
   
});