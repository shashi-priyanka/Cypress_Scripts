import { Login } from "./Login.js";
import { NewAccount } from "./NewAccount.js";
import { NewContact } from "./NewContact";
import { NewInvoice } from "./NewInvoice.js";
import { NewBill } from "./NewBill.js";
import { NewPo } from "./NewPo.js";
import { NewOptyandInvoicefromAccount } from "./OptyandInvoicefromAccount.js";
import { NewOpportunity } from "./NewOpty.js";
import { NewOptyInvoice } from "./OptyInvoice.js"
import { NewOptyInvoiceWithProduct } from "./OptyInvoiceWithProduct.js";
import { NewOptyBillWithProduct } from "./OptyBillWithProduct.js"
import { NewOptyPoWithProduct } from "./OptyPoWithProduct.js" 
import { NewOptyPoWithProduct1 } from "./OptyPoWithProduct1.js" 
import { NewOptyInvoiceWithoutProduct } from "./OptyInvoiceWithoutProduct.js"
import { NewOptyBillWithoutProduct } from "./OptyBillWithoutProduct.js"
import { NewOptyPoWithoutProduct } from "./OptyPoWithoutProduct.js"
import { NewOptyBillWithoutSupplier } from "./OptyBillWithoutSupplier.js"
import { NewOptyPoWithoutSupplier } from "./OptyPoWithoutSupplier.js"
import { NewInvoiceWithoutDescription } from "./InvoiceWithoutDescription.js"
import { NewROMInvoice } from "./ROMInvoice.js";
import { NewROMBill } from "./ROMBill.js";
import { NewROMPo } from "./ROMPo.js";


 describe("Creation of Testcases", ()=>{
  //  it("Positive test case -- Creation of Acccount",() =>{
  //     const login = new Login()
  //     login.login()
  //      const accountcreate = new NewAccount()
  //      accountcreate.newAccount(4)
  //         const Contactcreate = new NewContact()
  //         Contactcreate.newContact(0)

  //  })
  //   it("Positive test case -- Creation of Invoice from Acccount",() =>{
  //      const login = new Login()
  //      login.login()
  //       const invoicecreate = new NewInvoice()
  //       invoicecreate.newInvoice()
  //  })
  //  it("Positive test case -- Creation of bill from Account",() =>{
  //     const login = new Login()
  //     login.login()
  //       const billcreate = new NewBill()
  //       billcreate.newBill()
  //   })  
  //  it("Positive test case -- Creation of Po from Account",() =>{
  //     const login = new Login()
  //     login.login()
  //       const pocreate = new NewPo()
  //       pocreate.newPo()
  //   })
    // it("Negative test case -- Creation of Invoice from Account without adding description",() =>{
    //   const login = new Login()
    //   login.login()  
    //    const invoiceWithoutDescription =new NewInvoiceWithoutDescription()
    //    invoiceWithoutDescription.newInvoiceWithoutDescription()
    // })
    // it("Positive test case -- Creation of Opportunity and Invoice from Account",() =>{
    //   const login = new Login()
    //   login.login()
    //  const optyandInvoicefromAccount = new NewOptyandInvoicefromAccount()
    //  optyandInvoicefromAccount.newOptyandInvoicefromAccount()
    //  })
  //  it("Positive test case -- Creation of Opty",() =>{
  //     const login = new Login()
  //     login.login()
  //       const optycreate = new NewOpportunity()
  //       optycreate.newOpportunity(4)
  //      })
  //  it("Positive test case -- Creation of Invoice from Opty",() =>{
  //     const login = new Login()
  //     login.login()       
  //      const optyinvoicecreate = new NewOptyInvoice()
  //      optyinvoicecreate.newOptyInvoice()
  //   })
  // it("Negative test case -- Creation of Invoice in Read-Only mode",() =>{
  //       const login = new Login()
  //       login.login()
  //       cy.get('[title="Breadwinner Tab"]').click()
  //       cy.get('.slds-checkbox_faux_container > .slds-checkbox_faux').click()
  //        const romInvoicecreate = new NewROMInvoice()
  //        romInvoicecreate.newROMInvoice()
  //       })
  //     it("Negative test case -- Creation of Bill in Read-Only mode",() =>{
  //       const login = new Login()
  //       login.login()
  //       const romBillcreate = new NewROMBill()
  //        romBillcreate.newROMBill()
  //     })
  //     it("Negative test case -- Creation of Po in Read-Only mode",() =>{
  //       const login = new Login()
  //       login.login()  
  //        const romPocreate = new NewROMPo()
  //        romPocreate.newROMPo()
  //      })
      it("Positive test case -- Creation of Invoice from Opty by adding product",() =>{
        const login = new Login()
        login.login()
        cy.get('[title="Breadwinner Tab"]').click()
        cy.get('.slds-checkbox_faux_container > .slds-checkbox_faux').click()
         const optyinvoiceWithProductcreate = new NewOptyInvoiceWithProduct()
         optyinvoiceWithProductcreate.newOptyInvoiceWithProduct()
      })

  //  it("Positive test case -- Creation of Bill from Opty by adding product",() =>{
  //      const login = new Login()
  //      login.login()
  //       const optybillWithProductcreate = new NewOptyBillWithProduct()
  //       optybillWithProductcreate.newOptyBillWithProduct()
  //   })
  //  it("Positive test case -- Creation of Po from Opty by adding product",() =>{
  //     const login = new Login()
  //     login.login()
  //     const optyPoWithProductcreate = new NewOptyPoWithProduct()
  //      optyPoWithProductcreate.newOptyPoWithProduct()
  //   })
  //  it("positive test case -- Creation of Po from Opty with product1",() =>{
  //         const login = new Login()
  //         login.login()
  //          const optyPoWithProduct1create = new NewOptyPoWithProduct1()
  //      optyPoWithProduct1create.newOptyPoWithProduct1()
  //       })
  // it("Negative test case -- Creation of Invoice from Opty without product",() =>{
  //   const login = new Login()
  //   login.login()
  //   const accountcreate = new NewAccount()
  //   accountcreate.newAccount(5)
  //    const optycreate = new NewOpportunity()
  //    optycreate.newOpportunity(5)
  //    const optyInvoiceWithoutProductcreate = new NewOptyInvoiceWithoutProduct()
  //    optyInvoiceWithoutProductcreate.newOptyInvoiceWithoutProduct()
  // })
      // it("Negative test case -- Creation of bill from Opty without product",() =>{
      //   const login = new Login()
      //   login.login()
      //  const accountcreate = new NewAccount()
      //  accountcreate.newAccount(6)
      //    const optycreate = new NewOpportunity()
      //    optycreate.newOpportunity(6)
      //    const optybillWithoutProductcreate = new NewOptyBillWithoutProduct()
      //    optybillWithoutProductcreate.newOptyBillWithoutProduct()
      // })
      // it("Negative test case -- Creation of Po from Opty without product",() =>{
      //   const login = new Login()
      //   login.login()
      //   const accountcreate = new NewAccount()
      //  accountcreate.newAccount(7)
      //    const optycreate = new NewOpportunity()
      //    optycreate.newOpportunity(7)
      //    const optyPoWithoutProductcreate = new NewOptyPoWithoutProduct()
      //    optyPoWithoutProductcreate.newOptyPoWithoutProduct()
      // })
  
  //     it("Negative test case -- Creation of Bill from Opty without adding supplier account to product",() =>{
  //       const login = new Login()
  //       login.login()
  //        const optycreate = new NewOpportunity()
  //        optycreate.newOpportunity(7)
  //        const optyBillWithoutSuppliercreate = new NewOptyBillWithoutSupplier()
  //        optyBillWithoutSuppliercreate.newOptyBillWithoutSupplier()
  //      })
  //     it("Negative test case -- Creation of Po from Opty without adding supplier account to product",() =>{
  //       const login = new Login()
  //       login.login()
  //        const optycreate = new NewOpportunity()
  //        optycreate.newOpportunity(8)
  //        const optyPoWithoutSuppliercreate = new NewOptyPoWithoutSupplier()
  //        optyPoWithoutSuppliercreate.newOptyPoWithoutSupplier()
  //     })
  // it("Negative test case -- Creation of Bill from opty without enabling the bill in configuration",() =>{
    //     const login = new Login()
    //     login.login()
    //     cy.get('[title="Breadwinner Tab"]').click()
    //     cy.get('[title="Configuration"]').click()
    //     cy.get('#BillsContent').click()
    //     cy.get('#j_id0\\:theForm\\:syncSuppliersBills').click({force: true})
    //     cy.get('[title="Opportunities Tab"]').click()
    //     cy.get('.first > th.dataCell > a').click()
    //     cy.get('[value="New Bill"]').click()
    //    })
    //   it("Negative test case -- Creation of Po from opty without enabling the Po in configuration",() =>{
    //     const login = new Login()
    //     login.login()
    //     cy.get('[title="Breadwinner Tab"]').click()
    //     cy.get('[title="Configuration"]').click()
    //     cy.get('#POsContent').click()
    //     cy.get('#j_id0\\:theForm\\:syncPOs').click({force: true})
    //     cy.get('[title="Opportunities Tab"]').click()
    //     cy.get('.first > th.dataCell > a').click()
    //     cy.get('[value="New Purchase Order"]').click()
    //   })
    //     
    //it("Negative test case -- Creation of Invoice from opty without adding required field in the opportunity to invoice line item section in the configuration",() =>{
      //   const login = new Login()
      //   login.login()
      //   const optycreate = new NewOpportunity()
      //   optycreate.newOpportunity(11)
      //   cy.get('[value="New Invoice"]').click()
      //   cy.get('[value="Next"]').click({force: true})
      //   cy.wait(4050)
      //   cy.get('#pg\\:theForm\\:upsertBAC').click()
      //   cy.get('#j_id0\\:theForm\\:theInvoiceDetailBlock\\:createDraftInvoice').click()
      // })
    //   it("Negative test case -- Creation of Bill without adding required Bill default line item fields in configuration",() =>{
    //   })
    //   it("Negative test case -- Creation of Po without adding required Bill default line item fields in configuration",() =>{
    //   })
    //   it("Positive test case -- Creation of Invoice from Account by adding configuration steps",() =>{
    //   })
    //   it("Positive test case -- Creation of Bill from Account by adding configuration steps",() =>{
    //   })
    //   it("Positive test case -- Creation of Po from Account by adding configuration steps",() =>{
    //   })
    //   it("Positive test case -- Creation of Invoice from Opty by adding configuration steps",() =>{
    //   })
    //   it("Positive test case -- Creation of Bill from Opty by adding configuration steps",() =>{
    //   })
    //   it("Positive test case -- Creation of Po from Opty by adding configuration steps",() =>{
    //   })
    
 })