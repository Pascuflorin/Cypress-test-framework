const logo = ".logo"

describe('Verify logo', () => {
      
    it('verify width', () => {
        cy.visit("https://airportlabs.com")
        cy.get(logo).should("be.visible").should(([img])=>{
            expect(img.naturalWidth).to.equal(80)
        })
    });
    
    it('verify height', () => {
        cy.get(logo).should("be.visible").should(([img])=>{
            expect(img.naturalHeight).to.equal(52)
        })
    });
  
});