//needed to use window.cy
// cy was showing never defined
describe("My first test", () => {
  it("doesn't do much", () => {
    expect(true).toBe.equal(true)
  })

  it('opens the app, finds an element', () => {   
    window.cy.visit('http://localhost:3000') 
    window.cy.contains('My Recipes')
})

  it('finds the form and adds text in the input field', () => {   
    window.cy.get('.form-test')
      .type('fake text')
      .should('have.value', 'fake text')
})

 
})