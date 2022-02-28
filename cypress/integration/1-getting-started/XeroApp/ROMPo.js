class NewROMPo{
  
    newROMPo(index)
   {
    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
    cy.get('[title="Breadwinner Tab"]').click()
    cy.get('[title="Configuration"]').click({force: true})  
    cy.get('#POsContent').click()
    cy.get('#j_id0\\:theForm\\:POSuppliersList').select('Account')
    cy.get('#j_id0\\:theForm\\:POLISupplierPrice').select('List Price')
    cy.get('#j_id0\\:theForm\\:POSaveBtn').click()

    cy.get('[title="Opportunities Tab"]').click()
    cy.get('.first > th.dataCell > a').click()
    // cy.get('[value="Add Product"]').click()
    // cy.wait(4050)
    // cy.get('#01u5g000003HGZK').click({force: true})
    // cy.get('[value="Select"]').click()
    // cy.get('#Quantity01u5g000003HGZK').type('1')
    // cy.get(':nth-child(1) > td > [value=" Save "]').click()
    // cy.get('[title="Edit - Record 1 - GenWatt Diesel 1000kW"]').click()
    // cy.get('#CF00N5g00000R0ubS').type('xero 44')
    // cy.get('#topButtonRow > [value=" Save "]') .click()

    

    cy.get('[value="New Purchase Order"]').click()
    cy.get('[value="Next"]').click({force: true})

    }
}
 module.exports={NewROMPo};
