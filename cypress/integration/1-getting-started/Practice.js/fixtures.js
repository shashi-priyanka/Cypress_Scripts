describe('Login Test Suite',() => {
 
    before(function() {
        cy.fixture('example').then(function(data){
          this.data=data  
        })
  
    })
  
      it('FixturesDemoTest', function()
      {
        cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#Login').click()
  
      
      })
  })