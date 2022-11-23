/// <reference types="cypress" />
/*
* Visit a web page.
* Query for an element.
* Interact with that element.
* Assert about the content on the page.
*
*/
describe('home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })
  it(' display default 17 jobs totally', () => {
    cy.get('a.relative.block').should('have.length', 17)
  });

  it('toggle the color schema', () => {
    
    cy.get('html').should(($html) => {
      expect($html).to.have.class('')
    })
    .get('label[for="modeToggle"]').click()
    .get('html').should('have.class','dark')
  })

  it("filter the job search result", () => {
    
    cy.get('input#title').type('engineer')
    cy.get('input[name="location"]').type("Japan")
    cy.get('button[name="search"]').click()
    cy.get('a.relative.block ').should('have.length',2)
  })
})