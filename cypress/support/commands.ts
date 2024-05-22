/// <reference types="cypress" />

Cypress.Commands.add("fillPage1AndProceed", (firstName: string, lastName: string,) => {
  cy.get("[data-cy='input-firstName']",).type(firstName,)
  cy.get("[data-cy='input-lastName']",).type(lastName,)
  cy.get("[data-cy='button-next-page']",).click()
},)

Cypress.Commands.add("fillPage2AndProceed", (email: string, phoneNumber: string,) => {
  cy.get("[data-cy='input-email']",).type(email,)
  cy.get("[data-cy='input-phoneNumber']",).type(phoneNumber,)
  cy.get("[data-cy='button-next-page']",).click()
},)

Cypress.Commands.add("fillPage3AndProceed", (income: string,) => {
  cy.get(`[data-cy='input-income-${income}']`,).click()
  cy.get("[data-cy='button-next-page']",).click()
},)

Cypress.Commands.add("validateOverviewDataAndProceed", (firstName: string, lastName: string, email: string, phoneNumber: string, income: string,) => {
  cy.get("[data-cy='overview-firstName-value']",).should("have.text", firstName,)
  cy.get("[data-cy='overview-lastName-value']",).should("have.text", lastName,)
  cy.get("[data-cy='overview-email-value']",).should("have.text", email,)
  cy.get("[data-cy='overview-phoneNumber-value']",).should("have.text", phoneNumber,)
  cy.get("[data-cy='overview-income-value']",).should("have.text", income,)
  cy.get("[data-cy='button-next-page']",).click()
},)

Cypress.Commands.add("validatePageTitle", (title: string,) => {
  cy.get("[data-cy='form-page-title']",).should("have.text", title,)
},)