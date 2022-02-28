class NewROMInvoice{
  
    newROMInvoice(index)
   {
       
    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
       cy.get('[value="New Invoice"]').click()
       cy.get('[value="Next"]').click({force: true})

    }
}
 module.exports={NewROMInvoice};
