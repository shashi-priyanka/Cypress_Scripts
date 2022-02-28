class NewOptyandInvoicefromAccount{
  

    newOptyandInvoicefromAccount(index)
  {  
     
     cy.get('#Account_Tab > a').click({force:true})
       cy.get('.first > th.dataCell > a').click()
      cy.get('[value="New Opportunity"]').click()
      cy.get('#opp3').type('Cypress') 
      cy.get('#opp9')
      cy.get('.dateFormat > a').click() 
      cy.get('#opp11').select('Prospecting')
      cy.get('#topButtonRow > [value=" Save "]').click()
      cy.get('[value="New Invoice"]').click()
      cy.get('[value="Next"]').click({force: true})
      cy.wait(4050)
      //cy.get('#pg\\:theForm\\:upsertBAC').click()
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('Hi')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type('1')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type('100')
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type('10')
   
      cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
    }
}

module.exports={NewOptyandInvoicefromAccount};
