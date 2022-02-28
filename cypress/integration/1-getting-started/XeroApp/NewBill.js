class NewBill{
  

    newBill(index)
  {
    cy.get('#Account_Tab > a').click({force:true})
    cy.get('.first > th.dataCell > a').click()

    cy.get('[value="New Bill"]').click()

    cy.get('[title="Breadwinner Tab"]').click()
    
    cy.get('[title="Configuration"]').click({force: true})  
    cy.get('#BillsContent').click()
    cy.wait(4050)
    cy.wait(4050)
    cy.get('#j_id0\\:theForm\\:syncSuppliersBills').click({force: true})
    cy.get('#j_id0\\:theForm\\:billSuppliersList').select('Account')
    cy.get('#j_id0\\:theForm\\:billLIPrice').select('List Price')
    cy.get('#j_id0\\:theForm\\:billSaveBtn').click()

    cy.get('#Account_Tab > a').click({force:true})
    cy.get('.first > th.dataCell > a').click()

      cy.get('[value="New Bill"]').click()
      cy.get('[value="Next"]').click({force: true})
      cy.wait(4050)

      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('hello')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type('1')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type('100')
      
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftBill').click()
      

      }
    }

  module.exports={NewBill};
