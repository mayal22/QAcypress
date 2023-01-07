/// <reference types="Cypress" />

describe("assertions",()=>{

  it("not assertion",()=>{
    expect("atul").to.not.be.equal("ATUL")
  })
  it("not equal again",()=>{
    expect(true).not.to.be.equal(false)
  })

  it.only("is not equal",()=>{
    expect(21).is.not.equal(14)
  })
})

describe("deep expect assertion",()=>{
  it.only("deep not equal",()=>{
    let one_object = {
      "name":"Rahul bhuj",
      "age": 41
    }
    let other_object = {
      "age":41,
      "name":"Rahul bhuj"
      
    }
    expect(one_object).to.be.deep.equal(other_object)
  })
})
