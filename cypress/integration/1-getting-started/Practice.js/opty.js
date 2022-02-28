describe('Login Test Suite',() =>
{
    it('Login into Test env',() => {
    
      cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

      cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')
      cy.get('#password').type('SHASHI@28')
      cy.get('#Login').click()
      cy.get('#tsidButton').click()
      cy.get('#Opportunity_Tab > a').click()
      cy.get('#tryLexDialogX').click()
      cy.get('.pbButton > .btn').click()
       cy.get('#opp3').type('testing') 
       cy.get('#opp4').type('Account 3')
       cy.get('#opp5').select('New Customer')
       cy.get('#opp6').select('Web')
       cy.get('#opp7').type('10000')
       cy.get('#opp9')
        .get('.dateFormat > a').click()  
       cy.get('#opp10').type('Contact')
       cy.get('#opp11').select('Prospecting')
       cy.get('#00N5g00000GKuz2').type('1') 

       cy.get('#00N5g00000GKuz0').select('In progress')
       cy.get('#opp14').type('the product is amazing')
cy.get('#00N5g00000QznpV').type('0')
cy.get('#00N5g00000QznpT').type('0')
cy.get('#00N5g00000QznpU').type('10,000')
cy.get('#00N5g00000QznpW').type('10,000')
       cy.get('#topButtonRow > [value=" Save "]').click()   
cy.get('[title="New Invoice"]').click()
//       cy.wait(4050)
//cy.get('input[type="submit"]').click({ multiple: true })

})
})
