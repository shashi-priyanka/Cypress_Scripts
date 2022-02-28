class NewOptyInvoiceWithoutProduct{
  

    newOptyInvoiceWithoutProduct()
    {

        cy.get('[value="New Invoice"]').click()
        cy.get('[value="Next"]').click({force: true})
        cy.wait(4050)
        cy.get('#pg\\:theForm\\:upsertBAC').click()
  
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
        cy.wait(4000)
  
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('Hi')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type('1')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type('100')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type('10')
     
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
        cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtnerror').click()
        cy.get('#closeIcon').click()
}
}
module.exports={NewOptyInvoiceWithoutProduct};
