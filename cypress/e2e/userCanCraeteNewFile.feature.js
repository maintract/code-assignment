describe("User can create a new file", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it('Click on file tab', () => {
    cy.get(".file").click()

  })
})