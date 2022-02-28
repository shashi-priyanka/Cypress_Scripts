
class Login{

    login()
    {
        cy.visit("https://login.salesforce.com")
        cy.fixture('login.json').then((user) => {
        cy.get('input[id=username]').type(user.un)
        cy.get('input[name=pw]').type(user.pwd)

        })
            
        cy.get('input[name=Login]').click()
        
        
}
}
module.exports={Login};      