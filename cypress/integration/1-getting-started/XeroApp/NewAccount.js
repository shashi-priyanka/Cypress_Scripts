class NewAccount{
  
  newAccount(index)
{
    
  var testAccountData = require('C:/Users/dell/cypressautomation/Accounts.json');
  console.log(testAccountData[index])

         cy.get('#Account_Tab > a').click({force:true})
         cy.get('.pbButton > .btn').click({force:true})

        var AccountName = testAccountData[index].AccountName
        var PhoneNumber = testAccountData[index].PhoneNumber
        var Industry = testAccountData[index].Industry
        var BillingStreet = testAccountData[index].BillingStreet
        var BillingCity = testAccountData[index].BillingCity
        var BillingState = testAccountData[index].BillingState
        var BillingZip = testAccountData[index].BillingZip
        var BillingCountry = testAccountData[index].BillingCountry
            
            cy.get('#acc2').type(AccountName)
            cy.get('#acc10').type(PhoneNumber)
            cy.get('#acc7').select(Industry) 
            cy.get('#acc17street').type(BillingStreet)
            cy.get('#acc17city').type(BillingCity)
            cy.get('#acc17state').type(BillingState)
            cy.get('#acc17zip').type(BillingZip)
            cy.get('#acc17country').type(BillingCountry)
          
            cy.get('#bottomButtonRow > [value=" Save "]').click()

            

          }
        }
      
      module.exports={NewAccount};
 
  
            

            

 

