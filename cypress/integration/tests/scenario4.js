
const twitterButton="a:nth-of-type(1) > img"
const linkedinButton="a:nth-of-type(2) > img"
const facebookButton="a:nth-of-type(3) > img"

describe('It should verify social media links', () => {
    it('the twitter button', () => {
        cy.visit("https://airportlabs.com")
        cy.get(twitterButton).click()
        cy.url().should('eq', 'https://twitter.com/airportlabs')
    });
    
    it('the linkedin button', () => {
        cy.visit("https://airportlabs.com")
        cy.get(linkedinButton).click()
        cy.url().should('eq', 'https://www.linkedin.com/company/airport-labs')
    });

    it('the facebook button', () => {
        cy.visit("https://airportlabs.com")
        cy.get(facebookButton).click()
        cy.url().should('eq', 'https://www.facebook.com/AirportLabs')
    });
});