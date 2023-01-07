/// <reference types="Cypress"/>

describe("Registering suite",()=>{
    
    before(()=>{
        cy.visit("https://parabank.parasoft.com/")
    })

    it("click on register link",()=>{
        cy.get("a[href='register.htm']").click()
        cy.get("#customerForm").should("be.visible")
    })
})