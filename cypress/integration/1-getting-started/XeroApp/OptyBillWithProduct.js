class NewOptyBillWithProduct{
  

    newOptyBillWithProduct()
    {
        cy.get('[title="Breadwinner Tab"]').click()
        cy.get('#Configuration').click()
        cy.get('#BillsContent').click()
        cy.wait(4000)
        //cy.get('#j_id0\\:theForm\\:createAuthorisedBill').click()
        cy.get('.slds-m-left_small.slds-form-element > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
        cy.wait(4000)
        cy.get('#j_id0\\:theForm\\:billSaveBtn').click()

    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()

    cy.get('[title="Edit - Record 1 - GenWatt Diesel 1000kW"]').click()
    cy.get('#CF00N5g00000R0ubS').type('Auto-5')
    cy.get('#topButtonRow > [value=" Save "]') .click()

    cy.get('[value="New Bill"]').click()
    cy.get('[value="Next"]').click({force: true})
    cy.wait(4050)
    //cy.get('#pg\\:theForm\\:upsertBAC').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedBill').click()
    cy.wait(4050)
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:dueDate').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:j_id216 > .slds-form-element > .slds-form-element__control > .dateInput > .dateFormat > a').click()
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedBill').click()
    cy.wait(4050)
    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:accountCode').type('404{enter}')
    cy.wait(4000)
    cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtn').click()
    cy.get('#j_id0\\:j_id95\\:Subject').type('Approved Bill details from Opportunity with Products')
    cy.wait(4050)
    cy.get('#j_id0\\:j_id95\\:Button').click()

    cy.get('[title="Breadwinner Tab"]').click()
    cy.get('#Configuration').click()
    cy.get('#BillsContent').click()
    cy.wait(4000)
    cy.get('.slds-m-left_small.slds-form-element > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()

    cy.get('#j_id0\\:theForm\\:billSaveBtn').click()


}
}
module.exports={NewOptyBillWithProduct};
