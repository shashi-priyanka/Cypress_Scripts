class NewOptyPoWithProduct{
  

    newOptyPoWithProduct()
    {

        cy.get('[title="Breadwinner Tab"]').click()
        cy.get('#Configuration').click()
        cy.get('#POsContent').click()
        cy.wait(4050)
        cy.get(':nth-child(3) > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
        cy.get('#j_id0\\:theForm\\:POSaveBtn').click()

    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
    
    cy.get('[value="New Purchase Order"]').click()
    cy.get('[value="Next"]').click({force: true})
    cy.wait(4050)
    //cy.get('#pg\\:theForm\\:upsertBAC').click()

    cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createSubmittedPO').click()
    cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtn').click()
    cy.get('#j_id0\\:j_id95\\:Subject').type('Purchase Order Created in Xero and Submitted for Approval')
    cy.wait(4050)
    cy.get('#j_id0\\:j_id95\\:Button').click()

    cy.get('[title="Breadwinner Tab"]').click()
    cy.get('#Configuration').click()
    cy.get('#POsContent').click()
    cy.wait(4000)
    cy.get(':nth-child(3) > .slds-form-element__control > :nth-child(2) > .slds-checkbox__label > .slds-checkbox_faux').click()
    cy.get('#j_id0\\:theForm\\:POSaveBtn').click()

}
}
module.exports={NewOptyPoWithProduct};
