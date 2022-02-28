describe('Creating New Product', () => 
{ it('read data from Products.json', () =>
 { 
  cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

  cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')
  cy.get('#password').type('SHASHI@28')
  cy.get('#Login').click()
   
    var newProduct = 0
    {
        var testProductData = require('C:/Users/dell/cypressautomation/Products.json'); 
        console.log(testProductData[0])

     
        var ByKeyword = testProductData[0].ByKeyword
        var Quantity  = testProductData[0].Quantity

        cy.get('[title="Opportunities Tab"]').click()
        cy.get('#tryLexDialogX').click()
 
        cy.get('.first > th.dataCell > a').click() 
        cy.get('[title="Add Product"]').click()
        cy.get('#search').type(ByKeyword)
        cy.get('#PricebookEntrycol0').select('Product Name')
        cy.get('#save_filter_PricebookEntry').click()
        cy.get('#01u5g000003HGZO').click({force: true})
        cy.get('[value="Select"]').click()
        cy.get('#Quantity01u5g000003HGZO').type(Quantity)
        cy.get(':nth-child(1) > td > [value=" Save "]').click() 
  
        }
         
    })
  })