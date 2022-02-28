describe('CustomSuite', function() 
{
    it('LoginTest', function() {
    
      cy.login('shashipriya.swarnaformulaq-evaluation@gmail.com','SHASHI@28')
      cy.title().should('be.equal','Home Page ~ Salesforce - Developer Edition')

    })

    it('Add Account', function() {
    
      cy.login('shashipriya.swarnaformulaq-evaluation@gmail.com','SHASHI@28')

      cy.log('Add Account................') 

    })   

    it('Edit Account ', function() {
    
      cy.login('shashipriya.swarnaformulaq-evaluation@gmail.com','SHASHI@28')

      cy.log('Edit Account................')
    })
})

