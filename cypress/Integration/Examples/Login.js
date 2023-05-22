/// <reference types = 'cypress'/>

import { beforeEach } from "mocha"
import login from "../POM/login"
import products from "../POM/Productspom"

describe('Test Suite', ()=>{
    const logs = []
    beforeEach(()=>{ 
        cy.visit("https://www.saucedemo.com/")
        cy.wait(5000)
        const lp = new login()
        lp.getUserName('standard_user')
        lp.getpassword('secret_sauce')
        lp.login()
        cy.screenshot()
        cy.writeFile('logs.txt', logs)
    })
    it('Products Test case', ()=>{

        const pd = new products()
        pd.filter()
        cy.log(cy.get('#header_container > div.header_secondary_container > div > span > select').select(1).invoke("val"))
        pd.addToCart()
        pd.goToCart()
        cy.screenshot()

    })
})