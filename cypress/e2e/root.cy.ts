describe("Root", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/",)
  },)

  it("should properly display root page", () => {
    cy.get("[data-cy='root-title']",).should("exist",)
    cy.get("[data-cy='root-paragraph']",).should("exist",)
    cy.get("[data-cy='button-start-flow']",).should("exist",)
  },)

  it("should proceed to the form page when button-start-flow is clicked", () => {
    cy.get("[data-cy='button-start-flow']",).click()
    cy.url().should("match", /\/form$/,)
  },)
},)