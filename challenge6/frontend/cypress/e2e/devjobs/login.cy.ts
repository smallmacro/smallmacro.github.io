/// <reference types="cypress" />


//it.only will tell cypress, next time will only run the test case instead of all of them.
describe("login function test", ()=> {
  //before each test function, it empties database,
  // then create a new User and use the new one to login.
  beforeEach(()=> {
    cy.visit('http://localhost:5173/login')
  })
  it('front page can be opened', () => {
    cy.contains('LOGIN')
  });

  it('should login successfully with a valid account', () => {
    cy.get('#username').type('adam')
    cy.get('#password').type('itsacomplicatedpsd')
    cy.get('#submitBtn').click()
    //expect get the 200 repsone
  });

  it('should login fail with a invalid account', () => {
    cy.get('#username').type('adam')
    cy.get('#password').type('itsacomplicatedp')
    cy.get('#submitBtn').click()
    //expect get the 401 repsone
  });

  describe('when logged in', ()=> {
    //user can see its associated job lisiting
  })






})