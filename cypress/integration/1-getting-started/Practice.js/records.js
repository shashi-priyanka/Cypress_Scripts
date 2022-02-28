describe('Login Test Suite',() =>
{
    it('Login into Test env',() => {
    
      cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

      cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')
      cy.get('#password').type('SHASHI@28')
      cy.get('#Login').click()

      /*cy.get('#Account_Tab').click()
      cy.get('#tryLexDialogX').click()
      cy.get('.pbButton :button[value=" New "]').click()
      cy.get('#acc2').type('Account 3').click()
      cy.get('#acc10').type('9948574604').click()
      cy.get('#acc17street').type('Enkoor').click()
      cy.get('#acc17city').type('Khammam').click()
      cy.get('#acc17state').type('Telangana').click()
      cy.get('#acc17country').type('India').click()
      cy.get('#topButtonRow > [value=" Save "]').click()

      
      cy.get('[title="Contacts Tab"]').click()
      //cy.get('#tryLexDialogX').click()
      cy.get('[value=" New "]').click()
      cy.get('#name_firstcon2').type('shashi')
      cy.get('#name_lastcon2').type('swarna')
      cy.get('#con4').type('Account 3')
      cy.get('#con15').type('shashi@formulaq.io')
      cy.get('#topButtonRow > [value=" Save "]').click()*/
       
    
       cy.get('[title="Opportunities Tab"]').click()
       cy.get('#tryLexDialogX').click()
       cy.get('[value=" New "]').click()
       cy.get('#opp3').type('Cypress') 
       cy.get('#opp4').type('Account 3')
       cy.get('#opp5').select('New Customer')
       cy.get('#opp6').select('Web')
       cy.get('#opp7').type('10000')
       cy.get('#opp9')
        .get('.dateFormat > a').click()  
       cy.get('#opp10').type('Contact')
       cy.get('#opp11').select('Prospecting')
       cy.get('#00N5g00000GKuz2').type('1') 

       cy.get('#00N5g00000GKuz0').select('In progress')
       cy.get('#opp14').type('the product is amazing')
       cy.get('#topButtonRow > [value=" Save "]') .click()
       
  
     cy.get('[value="Add Product"]').click()
     cy.get('#search').type('Gold')
     cy.get('#PricebookEntrycol0').select('Product Code')
     cy.get('#PricebookEntryoper0').select('equals')
     cy.get('#PricebookEntryfval0').type('SL9060')
     cy.get('#save_filter_PricebookEntry').click() 
     cy.get('#01u5g000003HGZO').click({force: true})
     cy.get('[value="Select"]').click()
     cy.get('#Quantity01u5g000003HGZO').type('8')
     cy.get(':nth-child(1) > td > [value=" Save "]').click()

      })
    })
describe('Creating New Invoice', () =>     
{ it('Creating New Invoice from Accounts', () =>
 { 
  cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

  cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')       
  cy.get('#password').type('SHASHI@28') 
  cy.get('#Login').click()
  //cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/setup/forcecomHomepage.apexp?setupid=ForceCom')

cy.get('[title="Accounts Tab"]').click()
cy.get('#tryLexDialogX').click()
cy.get('.first > th.dataCell > a').click()
cy.get('[value="New Invoice"]').click()
//   cy.wait(3000) 
//cy.get('[type="radio"]').first().check({force: true})
cy.get('[type="radio"]').first()
.should('not.be.selected')

cy.get('[value="Next"]').click({force: true})
//   cy.wait(3000)
//   cy.get('#pg\\:theForm\\:companyNameInput').type('XeroContactName Random')
//   cy.get('[value="Create Xero Contact"]').click({force: true})
//   cy.wait(3000)
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:reference').type('Test_0')
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:description').type('I am Shashi')
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Qid').type(1)
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:Pid').type(1000)
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:index').type(10).blur()
//cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:accountCodeColumn > .slds-form-element__control > .slds-select_container > .select2-container > .selection > .select2-selection > .select2-selection__arrow').type('200{enter}')
cy.wait(200)

cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:invoiceDate').invoke('val')
.should('not.be.empty')
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:descriptionColumnheader')
.should('not.be.empty')
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:amount')
//.should('have.text', '1000')
.should('have.text', '900.00')
cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:totalColumn1')
.should('have.text', 'Total: 900.00')

cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedInvoice').click()


// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:1\\:description').type('Sweet')
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:1\\:Qid').type(9)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:1\\:Pid').type(2500)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:1\\:index').type(15)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:1\\:accountCodeColumn > .slds-form-element__control > .slds-select_container > .select2-container > .selection > .select2-selection > .select2-selection__arrow').type('260{enter}')

// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:2\\:description').type('priya')
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:2\\:Qid').type(20)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:2\\:Pid').type(100000)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:2\\:index').type(25)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:2\\:accountCodeColumn > .slds-form-element__control > .slds-select_container > .select2-container > .selection > .select2-selection > .select2-selection__arrow').type('270{enter}')
 
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:3\\:description').type('tulasi')
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:3\\:Qid').type(5)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:3\\:Pid').type(18000)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:3\\:index').type(5)

// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:4\\:description').type('Alekya')
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:4\\:Qid').type(5)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:4\\:Pid').type(18000)
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:4\\:index').type(7).blur()
// cy.wait(200)

// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:subtotalColumn')
// .should('have.text', 'Subtotal: 1689225.00')
// cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:totalColumn1')
// .should('have.text', 'Total: 1689225.00')

//cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:addMoreLineItems').click()

//cy.wait(5000)
// cy.get('[value="Create Draft Invoice in Xero"]').click() 

 })
})
describe('Creating New Invoice', () =>     
{ it('Creating New Invoice from Opportunities', () =>
 { 
  cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

  cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')       
  cy.get('#password').type('SHASHI@28') 
  cy.get('#Login').click()
  // cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/0015g00000WbOQY')


        cy.get('[title="Opportunities Tab"]').click()
        cy.get('#tryLexDialogX').click()
        cy.get('.first > th.dataCell > a').click()
        //cy.get('#30 015g00000WbOQY_00N5g00000QznoZ > .listRelatedObject > .bPageBlock > .pbHeader > table > tbody > tr > .pbButton > .btn').click()
        cy.get('[value="New Invoice"]').click()
        cy.wait(200)

      // cy.get('[type="radio"]').first()
      //   .should('not.be.selected')
      //   .next()
      //   .should('be.selected')
      // cy.get('#pg\\:theForm\\:j_id292 > .slds-form-element > .slds-form-element__control > :nth-child(1) > .slds-radio_faux').debug().should('have.text','')
      // cy.get('#pg\\:theForm\\:j_id294 > .slds-form-element > .slds-form-element__control > :nth-child(1) > .slds-radio_faux').should('have.text','')
      // cy.get('#pg\\:theForm\\:j_id292 > .slds-radio_faux').should('have.text','')
      // cy.get('[type="radio"]').first().should('not.be.checked').next().debug().should('be.checked')
      // cy.get('#pg\\:theForm\\:j_id294 > .slds-radio_faux').debug().should('have.text','::after')
        // cy.get('#pg\\:theForm\\:j_id292').get('[type="radio"]').next()
       cy.get('[value="Next"]').click({force: true}) 

        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:0\\:amount')
        .should('have.text', '240000.00')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:totalColumn1')
        .should('have.text', 'Total: 480000.00')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:quantityColumnheader')
        .should('have.text', 'Quantity')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:invoiceDate').invoke('val')
        .should('not.be.empty')
        cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:theTable\\:descriptionColumnheader')
        .should('not.be.empty')
        cy.wait(4000)

       //cy.get('[value="Create Draft Invoice in Xero"]').click()
       cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createAuthorizedInvoice').click()



       


      })
})

