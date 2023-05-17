/// <reference types = 'cypress'/>

import login from "../POM/login"
import products from "../POM/Productspom"

describe('Test Suite', ()=>{
    const logs = []
    it.only('Login Test case', ()=>{
        const lp = new login()
        lp.visit()
        cy.wait(5000)
        lp.getUserName('standard_user')
        lp.getpassword('secret_sauce')
        lp.login()
        cy.screenshot()
        cy.writeFile('logs.txt', logs)
        
    })
    it('Products Test case', ()=>{

        const pd = new products()
        pd.filter()
        pd.addToCart()
        pd.goToCart()
        cy.screenshot()

    })
})