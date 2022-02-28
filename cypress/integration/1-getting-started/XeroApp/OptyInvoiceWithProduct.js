class NewOptyInvoiceWithProduct{
  

    newOptyInvoiceWithProduct()
    {
    //cy.get('[title="Breadwinner Tab"]').click()
    cy.get('#Configuration').click()
    cy.get('#InvoiceContent').click()
    cy.wait(16000)
    cy.wait(16000)
    cy.wait(16000)
    //cy.get('.slds-m-left_small.slds-form-element > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
    cy.get('#j_id0\\:theForm\\:createAuthorisedInvoice').click()
    cy.get('#j_id0\\:theForm\\:saveButton').click()

    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
    cy.get('[value="Add Product"]').click()
    cy.wait(4050)
    cy.get('#01u5g000003HGZK').click({force: true})
    cy.get('[value="Select"]').click()
    cy.get('#Quantity01u5g000003HGZK').type('1')
    cy.get(':nth-child(1) > td > [value=" Save "]').click()
    
    cy.get('[value="New Invoice"]').click()
    cy.get('[value="Next"]').click({force: true})
    cy.wait(4050)
    //cy.get('#pg\\:theForm\\:upsertBAC').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedInvoice').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:dueDate')
      .get('.dateFormat > a').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedInvoice').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:accountCode').type('260{enter}')
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedInvoice').click()
    cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtn').click()
    cy.get('#j_id0\\:j_id95\\:Subject').type('Invoice Details from Account')
    cy.wait(4050)
    cy.get('#j_id0\\:j_id95\\:Button').click()

    cy.get('[title="Breadwinner Tab"]').click()
    cy.get('#Configuration').click()
    cy.get('#InvoiceContent').click()
    cy.wait(8000)
    cy.wait(4000)
    cy.get('#j_id0\\:theForm\\:createAuthorisedInvoice').click()
    cy.get('#j_id0\\:theForm\\:saveButton').click()


      


}
}
module.exports={NewOptyInvoiceWithProduct};