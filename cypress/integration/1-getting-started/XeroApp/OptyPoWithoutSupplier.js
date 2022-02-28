class NewOptyPoWithoutSupplier{
  

    newOptyPoWithoutSupplier()
    {

    cy.get('[value="Add Product"]').click()
    cy.wait(4050)
    cy.get('#01u5g000003HGZD').click({force: true})
    cy.get('[value="Select"]').click()
    cy.get('#Quantity01u5g000003HGZD').type('1')
    cy.get(':nth-child(1) > td > [value=" Save "]').click()
    
    cy.get('[value="New Purchase Order"]').click()
    
}
}
module.exports={NewOptyPoWithoutSupplier};
