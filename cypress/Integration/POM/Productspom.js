class products{

    filter(){
        cy.get('#header_container > div.header_secondary_container > div > span > select').select(1).invoke("val").should("eq","za")
    }
    addToCart(){

       price = cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
       cy.log(price)
       const addtocart =  cy.get('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')
       addtocart.click()
       cy.get('#remove-test\.allthethings\(\)-t-shirt-\(red\)').should('have.text', 'Remove')

       price1 = cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
       cy.log(price1)
       const addtocart1 = cy.get('#add-to-cart-sauce-labs-onesie')
       addtocart1.click()
       cy.get('#remove-sauce-labs-onesie').should('have.text', 'Remove')
    }

    goToCart(){
        const cart = cy.get('#shopping_cart_container > a')
        cart.click()

    }
}