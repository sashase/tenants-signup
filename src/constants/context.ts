import { FormState, FormValues, ValidationRule, } from "../interfaces"

export const INITIAL_FORM_STATE: FormState = {
  currentPageIndex: 0,
  isInputValid: true,
  values: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    income: "",
  },
}

export const VALIDATION_RULES: { [key in keyof FormValues]?: ValidationRule }[] = [
  {
    firstName: {
      pattern: /\S+/,
      errorMessage: "Der Vorname kann nicht leer sein",
    },
    lastName: {
      pattern: /\S+/,
      errorMessage: "Der Nachname kann nicht leer sein",
    },
  },
  {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Ungültiges E-Mail-Format",
    },
    phoneNumber: {
      pattern: /^\+?[0-9\s-]+$/,
      errorMessage: "Ungültiges Telefonnummernformat",
    },
  },
  {
    income: {
      pattern: /\S+/,
      errorMessage: "Bitte wählen Sie Ihr Monatseinkommen",
    },
  },
]