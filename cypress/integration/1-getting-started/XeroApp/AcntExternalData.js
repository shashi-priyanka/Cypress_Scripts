
describe('convert data to Json', () => 
{ it('read data from excel', () =>
	{
		cy.parseXlsx("C:/Users/dell/Desktop/Accounts.xlsx").then( (jsonData) =>
  { const rowLength = Cypress.$(jsonData[0].data).length
    const collength = Cypress.$(jsonData[0].data[0]).length
    let excelsheetarray = []
    let excelarrray = []


     for (let row = 1; row < rowLength; row++)
      { 
       for(let col = 0; col < collength; col++ ){
         excelarrray[jsonData[0].data[0][col]] = jsonData[0].data[row][col]

       }
        //var jsonData = jsonData[index].data 
        excelsheetarray.push(Object.assign({},excelarrray))
        console.log(Object.assign({},excelarrray))

        excelarrray = []

        //cy.writeFile("cypress/fixtures/xlsxData.json", {Accountname:jsonData[0][0], Phno:jsonData[0][1],Ind:jsonData[0][2]})
      }
      console.log(Object.assign({},excelsheetarray))
      cy.writeFile('./Accounts.json',Object.assign({},excelsheetarray))
  })

})
})
