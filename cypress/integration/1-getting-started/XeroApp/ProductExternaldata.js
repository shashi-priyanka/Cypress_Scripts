describe('convert data to Json', () => 
{ 
  it('read data from excel', () =>
 { 
   cy.parseXlsx("C:/Users/dell/Desktop/Products.xlsx").then( (jsonData) =>
    { 
      const rowLength = Cypress.$(jsonData[0].data).length
      const collength = Cypress.$(jsonData[0].data[0]).length
      let excelsheetarray = []
      let excelarrray = [] 

       for (let row = 1; row < rowLength; row++)
        { 
         for(let col = 0; col < collength; col++ ){
           excelarrray[jsonData[0].data[0][col]] = jsonData[0].data[row][col]

         }  
          excelsheetarray.push(Object.assign({},excelarrray))
          console.log(Object.assign({},excelarrray)) 

          excelarrray = []

        }
        console.log(Object.assign({},excelsheetarray))
        cy.writeFile('./Products.json',Object.assign({},excelsheetarray))    
    })
 
})
})