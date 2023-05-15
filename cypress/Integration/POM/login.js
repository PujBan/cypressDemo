class login{
    //Action methods
    visit() {
        cy.visit("https://www.saucedemo.com/")
    }
    getUserName(value){
        const userName = cy.get('#user-name')
        userName.clear()
        userName.type(value)
        return this
    }
    getpassword(value){
       const password = cy.get('#password')
        password.clear()
        password.type(value)
        return this
    }
    login(){
        const button = cy.get('#login-button')
        button.click()
    }
}
export default login