describe('Creating New Invoice', () =>    
{ it('Creating New Invoice from Accounts', () =>
 { 
  cy.visit('https://login.salesforce.com')

  cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')       
  cy.get('#password').type('aS386FRgdV7s') 
  cy.get('#Login').click()

  // cy.get('#username').type('govardhan+bw-xero-dev2-new@breadwinner.com')       
  // cy.get('#password').type('1B33fL7dYlTX') 
  // cy.get('#Login').click()
  

  
  cy.get('[title="Breadwinner Tab"]').click()
  cy.get('.slds-checkbox_faux_container > .slds-checkbox_faux').click()
  cy.get('[title="Configuration"]').click()
  cy.get('#InvoiceContent').click()
 
      // cy.get('[title="Accounts Tab"]').click()

      //  cy.get('body').then(($body) => {
        
      //   if ($body.text().includes('Close')) {
        
      //     cy.get('body').contains("Close",{timeout:1000}).click({force:true})
      //   } else {
          
          
      //   }
      // })
        
        // cy.get('.first > th.dataCell > a').click()
        // cy.get('[value="New Invoice"]').click()
        // cy.get('[value="Next"]').click({force: true})
        // //cy.get('#pg\\:theForm\\:upsertBAC').click()
        

       
      

//  var AccountInvoice = 0 
// {
    
//   var testAccountInvoiceData = require('C:/Users/dell/cypressautomation/AccountInvoice.json');
//   console.log(testAccountInvoiceData[0])

//   var index = 0

//   var description = testAccountInvoiceData[index].description
//   var quantity = testAccountInvoiceData[index].quantity
//   var unitprice = testAccountInvoiceData[index].unitprice
//   var discount = testAccountInvoiceData[index].discount

//   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type(description)
//   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type(quantity)
//   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type(unitprice) 
//   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type(discount)

//   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()

  //cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtnerror').click()



// }

 })
})