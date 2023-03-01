
describe('App', () => {
    it('can navigate to the home page', () => {
      cy.visit('/')
    })

    it('can navigate to the login page', () => {
      cy.visit('/login')
    })
    
    it('can create a new page', () => {
      cy.visit('/new')
    })
  
    it('can open an existing page', () => {
      cy.visit('/open')
    })
  
    it('can save a page', () => {
      cy.visit('/save')
    })
  })
  