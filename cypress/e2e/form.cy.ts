import Chance from "chance"

const PAGE_TITLES: string[] = [
  "Wie heißen Sie?",
  "Wie erreichen wir Sie?",
  "Ihr Einkommen?",
  "Ist das richtig?",
  "Danke",
]

const INCOME_OPTIONS: string[] = [
  "€0 - €1.000",
  "€1.000 - €2.000",
  "€2.000 - €3.000",
  "€3.000 - €4.000",
  "Mehr als €4.000",
]

const chance = new Chance()

describe("Multipage Form", () => {
  let firstName: string
  let lastName: string
  let email: string
  let phoneNumber: string
  let income: string

  beforeEach(() => {
    firstName = chance.name()
    lastName = chance.name()
    email = chance.email()
    phoneNumber = chance.phone({ formatted: false, },)
    income = chance.pickone(INCOME_OPTIONS,)
    cy.visit("http://localhost:8000/form",)
  },)

  it("should properly display the first form page title", () => {
    cy.validatePageTitle(PAGE_TITLES[0],)
  },)

  it("should display validation errors on empty required fields on first page", () => {
    cy.get("[data-cy='button-next-page']",).click()
    cy.get("[data-cy='error-message']",).should("have.length", 2,)
  },)

  it("should proceed to the second page when button-next-page is clicked with valid input on first page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.validatePageTitle(PAGE_TITLES[1],)
  },)

  it("should display validation errors on empty required fields on second page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.get("[data-cy='button-next-page']",).click()
    cy.get("[data-cy='error-message']",).should("have.length", 2,)
  },)

  it("should proceed to the third page when button-next-page is clicked with valid input on second page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.validatePageTitle(PAGE_TITLES[2],)
  },)

  it("should display validation errors on unchecked required radio on third page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.get("[data-cy='button-next-page']",).click()
    cy.get("[data-cy='error-message']",).should("have.length", 1,)
  },)

  it("should proceed to the overview page when button-next-page is clicked with valid input on third page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.fillPage3AndProceed(income,)
    cy.validatePageTitle(PAGE_TITLES[3],)
  },)

  it("should properly display entered data on overview page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.fillPage3AndProceed(income,)
    cy.validateOverviewDataAndProceed(firstName, lastName, email, phoneNumber, income,)
  },)

  it("should proceed to the success page when button-next-page is clicked on overview page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.fillPage3AndProceed(income,)
    cy.validateOverviewDataAndProceed(firstName, lastName, email, phoneNumber, income,)
    cy.validatePageTitle(PAGE_TITLES[4],)
  },)

  it("should proceed to the root page when button-finish-flow is clicked on success page", () => {
    cy.fillPage1AndProceed(firstName, lastName,)
    cy.fillPage2AndProceed(email, phoneNumber,)
    cy.fillPage3AndProceed(income,)
    cy.validateOverviewDataAndProceed(firstName, lastName, email, phoneNumber, income,)
    cy.get("[data-cy='button-end-flow']",).click()
    cy.url().should("match", /\/$/,)
  },)
},)