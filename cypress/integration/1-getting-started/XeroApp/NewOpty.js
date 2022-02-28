class NewOpportunity{

    newOpportunity(index)
    {
        var testOpportunityData = require('C:/Users/dell/cypressautomation/Opp.json'); 
        console.log(testOpportunityData[index])

        cy.get('[title="Opportunities Tab"]').click()
        cy.get('.pbButton > .btn').click()  
        
  
        var Opportunityname = testOpportunityData[index].Opportunityname
        var Stage = testOpportunityData[index].Stage
        var AccountName = testOpportunityData[index].AccountName
        var CloseDate = testOpportunityData[index].CloseDate

        
        cy.get('#opp3').type(Opportunityname)
        cy.get('#opp11').select(Stage).should('have.value', Stage)
        cy.get('#opp4').type(AccountName)
        cy.get('#opp9').type(CloseDate)
        cy.get('#bodyCell').click()
        cy.get('#bottomButtonRow > [value=" Save "]').click()
  
        }
      }
      module.exports={NewOpportunity};

       
        
      
    
      


  

       


        

   