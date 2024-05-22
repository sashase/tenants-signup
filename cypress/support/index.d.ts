/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    fillPage1AndProceed(firstName: string, lastName: string): Chainable<void>;
    fillPage2AndProceed(email: string, phoneNumber: string): Chainable<void>;
    fillPage3AndProceed(income: string): Chainable<void>;
    validateOverviewDataAndProceed(firstName: string, lastName: string, email: string, phoneNumber: string, income: string,): Chainable<void>;
    validatePageTitle(title: string): Chainable<void>;
  }
}
