/// <reference types = 'cypress'/>

import login from "../POM/login"

describe('Test Suite', ()=>{

    it('Login Test case', ()=>{

        const lp = new login()
        lp.visit()
        lp.getUserName('standard_user')
        lp.getpassword('secret_sauce')
        lp.login()
        cy.screenshot()

    })
})