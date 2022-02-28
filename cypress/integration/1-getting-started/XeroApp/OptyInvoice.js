class NewOptyInvoice{
  
   newOptyInvoice(index)
  {
      cy.get('[title="Opportunities Tab"]').click()
      cy.get('.first > th.dataCell > a').click()
      cy.get('[value="New Invoice"]').click()
      cy.get('[value="Next"]').click({force: true})
      cy.wait(4050)
      //cy.get('#pg\\:theForm\\:upsertBAC').click()

      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('nice')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type('1')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type('100')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type('10')
   
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
      
    }
}
 module.exports={NewOptyInvoice};
