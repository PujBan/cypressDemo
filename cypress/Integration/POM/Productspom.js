class products{

    filter(){
        cy.get('.product_sort_container').select('Name (Z to A)')
        
    }
    addToCart(){

    const price = cy.get('div[class=inventory_list] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)')
       cy.log(price)
       const addtocart =  cy.get('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')
       addtocart.click()
       cy.get('#remove-test\.allthethings\(\)-t-shirt-\(red\)').should('have.text', 'Remove')

       const price1 = cy.get('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
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
export default products