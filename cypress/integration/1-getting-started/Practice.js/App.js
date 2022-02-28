import { Login } from "../BW-XeroApp/Login.js";
import { BwConfig } from "../BW-XeroApp/BwConfig.js";
cy.get('body').then(($body) => {
        
    if ($body.text().includes('Close')) {
    
      cy.get('body').contains("Close",{timeout:1000}).click({force:true})
    } else {
      
      
    }
  })