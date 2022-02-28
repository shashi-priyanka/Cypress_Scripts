class NewPo{
  

    newPo(index)
  {
    cy.get('[title="Breadwinner Tab"]').click()
    cy.get('[title="Configuration"]').click({force: true})  
    cy.get('#POsContent').click()
    cy.get('#j_id0\\:theForm\\:syncPOs').click({force: true})
    cy.wait(4000)
    cy.get('#j_id0\\:theForm\\:POSaveBtn').click()

    cy.get('#Account_Tab > a').click({force:true})
    cy.get('.first > th.dataCell > a').click()

      cy.get('[value="New Purchase Order"]').click()
      cy.get('[value="Next"]').click({force: true})
      cy.wait(4050)
      
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('good')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type('1')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type('100')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type('10')

      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftPO').click()
      cy.get('#j_id0\\:j_id7\\:ltngSendInvoiceBtn').click()
      cy.get('#j_id0\\:j_id95\\:Subject').type('Invoice Details from Account')
      cy.wait(4050)
      cy.get('#j_id0\\:j_id95\\:Button').click()
      

      

      }
    }

  module.exports={NewPo};
