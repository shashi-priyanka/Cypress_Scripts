class NewROMBill{
  
    newROMBill(index)
   {
    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
    cy.get('[value="Add Product"]').click()
    cy.wait(4050)
    cy.get('#01u5g000003HGZK').click({force: true})
    cy.get('[value="Select"]').click()
    cy.get('#Quantity01u5g000003HGZK').type('1')
    cy.get(':nth-child(1) > td > [value=" Save "]').click()
    cy.get('[title="Edit - Record 1 - GenWatt Diesel 1000kW"]').click()
    cy.get('#CF00N5g00000R0ubS').type('xero 43')
    cy.get('#topButtonRow > [value=" Save "]') .click()

    
    cy.get('[value="New Bill"]').click()
    cy.get('[value="Next"]').click({force: true})
     
    }
}
 module.exports={NewROMBill};
