class NewInvoiceWithoutDescription{
  

    newInvoiceWithoutDescription(index)
  {
    cy.get('#Account_Tab > a').click({force:true})
    cy.get('.first > th.dataCell > a').click()
      cy.get('[value="New Invoice"]').click()
      cy.get('[value="Next"]').click({force: true})
      cy.wait(4050)
      //cy.get('#pg\\:theForm\\:upsertBAC').click()
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
      

    }
  }

module.exports={NewInvoiceWithoutDescription};
