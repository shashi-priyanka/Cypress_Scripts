describe('Breadwinner', () =>     
{ it('Configuration', () =>
 { 
  cy.visit('https://login.salesforce.com')

    cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')       
    cy.get('#password').type('aS386FRgdV7s') 
    cy.get('#Login').click()

//     cy.get('#username').type('priya@formulaq.com')       
//    cy.get('#password').type('Y4i4DhSg9t5Q') 
//    cy.get('#Login').click()
  

    cy.get('[title="Breadwinner Tab"]').click()
  
  cy.get('[title="Configuration"]').click({force: true})  
  
  // cy.get('#InvoiceContent').click()
  // cy.wait(4000)
  // cy.wait(4000)
  // cy.wait(4000)
  // cy.wait(4000)
  // cy.wait(8000)
  //   cy.get(':nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
  // cy.get('#j_id0\\:theForm\\:defaultDueDays').type('7')
  // cy.get('#j_id0\\:theForm\\:defaultDueDaysOptions').select('day(s) after the invoice date')
  // cy.get('#j_id0\\:theForm\\:defaultXeroTaxOptions1').select('Tax Exclusive')
  // cy.get('#j_id0\\:theForm\\:InvoiceAccountCodes').select('200 - Sales')
  // cy.get('#j_id0\\:theForm\\:invoiceReferenceFields').select('Opportunity Name')
//   //cy.wait(4050)

cy.get('#BillsContent').click()
cy.wait(4050)
cy.get('#j_id0\\:theForm\\:syncSuppliersBills').click({force: true})
//cy.get('.slds-m-left_small.slds-form-element > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
//cy.get('#j_id0\\:theForm\\:defaultXeroTaxOptions').select('No Tax')

  //cy.get('#j_id0\\:theForm\\:saveButton').click({force: true})


  })
})