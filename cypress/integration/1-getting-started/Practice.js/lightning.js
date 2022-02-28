describe('Login Test Suite',() =>
{
    it('Login into Test env',() => {
    
    cy.request('https://login.salesforce.com/?un=shashipriya.swarnaformulaq-evaluation%40gmail.com&pw=Shashi@28&startURL=%2Fhome')
    cy.visit('https://formulaqevaluation-shashipr-dev-ed.lightning.force.com/lightning/o/Opportunity/list?filterName=Recent')
    //cy.visit('https://formulaqevaluation-shashipr-dev-ed.lightning.force.com/lightning/o/Opportunity/new?count=2&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=163291204358845718&backgroundContext=%2Flightning%2Fo%2FOpportunity%2Flist%3FfilterName%3DRecent')
    cy.get('a[title="New"]').click() 
   cy.wait(4000)
   
cy.get('div[class="isModal inlinePanel oneRecordActionWrapper"]').find('input').then((inputtxt) => {
  cy.get(inputtxt[3]).type('Opportunityname')
  cy.wait(4000)
  cy.get(inputtxt[5]).type('AccountName').wait(4000).type('{enter}').type('{enter}',{force:true})
  cy.get('div[class="modal-container slds-modal__container"]').then((result) => {
    cy.wrap(result[1]).get('div[class="grid slds-table_joined gridInScroller slds-is-relative forceSearchResultsGridView"]').contains(AccountName).click({force:true})})
   
  
  cy.get(inputtxt[6]).type("6/13/2021")
  //cy.get('div[class="isModal inlinePanel oneRecordActionWrapper"]').type("6/13/2021")

  cy.get(inputtxt[10]).click()
  cy.get('div[class="isModal inlinePanel oneRecordActionWrapper"]').find('[title="Needs Analysis"]').click()
 cy.get(inputtxt[16]).type('deptclass')
  cy.get(inputtxt[18]).type('OrderNo')
  if(Trackingno_loc != null)
  { 
      cy.get(inputtxt[17]).type('Trackingno_loc')

      
  }



})
cy.get('div[class="isModal inlinePanel oneRecordActionWrapper"]').find('button[name="SaveEdit"]').click()


    
})
     })

