class NewContact{
  
    newContact(index)
  {
      
    var testContactData = require('C:/Users/dell/cypressautomation/Contacts.json');
    console.log(testContactData[index])
  
           cy.get('#Account_Tab > a').click({force:true})
           cy.get('.first > th.dataCell > a').click()


           cy.get('[value="New Contact"]').click()

          //  var FirstName = testContactData[index].FirstName
           var LastName = testContactData[index].LastName
           var Email = testContactData[index].Email

           cy.get('#name_lastcon2').type(LastName)
           cy.get('#con15').type(Email)
          
            cy.get('#bottomButtonRow > [value=" Save "]').click()

        }
    }
  
  module.exports={NewContact};
