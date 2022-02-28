describe('Login Test Suite',() =>
{
    it('Login into Test env',() => {
    
      cy.visit('https://formulaqevaluation-shashipr-dev-ed.my.salesforce.com/')

      cy.get('#username').type('shashipriya.swarnaformulaq-evaluation@gmail.com')
      cy.get('#password').type('SHASHI@28')
      cy.get('#Login').click()

      cy.get('#Account_Tab').click()
      cy.get('#tryLexDialogX').click()
      cy.get('.pbButton :button[value=" New "]').click()
     
      cy.get('#acc2').type('Account 2').click()
      cy.get('#acc10').type('9948574604').click()
      cy.get('#acc17street').type('Enkoor').click()
      cy.get('#acc17city').type('Khammam').click()
      cy.get('#acc17state').type('Telangana').click()
      cy.get('#acc17country').type('India').click()
      cy.get('.pbButtonb :submit[name="save_new"]').click()

      var genArr = Array.from({length:1},(v,k)=>k+1)
      cy.wrap(genArr).each((index) => {
      cy.get('#acc2').type('My Account 2').click()
      cy.get('#acc10').type('(852) 255-1213').click()
      cy.get('#acc17street').type('Chandanagar').click()
      cy.get('#acc17city').type('Hyderabad').click()
      cy.get('#acc17state').type('Telangana').click()
      cy.get('#acc17zip').type('500001').click()
      cy.get('#acc17country').type('India').click()
      cy.get('#acc18street').type('Gajuwaka').click()
      cy.get('#acc18city').type('Vizag').click()
      cy.get('#acc18state').type('Andhrapradesh').click()
      cy.get('#acc18zip').type('500321').click()
      cy.get('#acc18country').type('India').click()
      cy.get('.pbButtonb :submit[name="save_new"]').click()
      })
    }) 
})

