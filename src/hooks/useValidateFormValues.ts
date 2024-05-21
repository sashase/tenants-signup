import { FormStateContext, } from "../contexts/form-state.context"
import { FormValues, ValidationRule, } from "../interfaces"

export default function useValidateFormValues({ formState, setFormState, }: FormStateContext, rules: { [key in keyof FormValues]?: ValidationRule }[],) {
  const validateFormValues = (): boolean => {
    const pageRules = rules[formState.currentPageIndex]

    let isInputValid = true
    const errors: { [key in keyof FormValues]?: string } = {}

    if (!pageRules) {
      setFormState((prev,) => ({
        ...prev,
        isInputValid,
      }),)
      return isInputValid
    }

    for (const [property, rule,] of Object.entries(pageRules,) as [
      keyof FormValues,
      ValidationRule,
    ][]) {
      if (!rule.pattern.test(formState.values[property],)) {
        isInputValid = false
        errors[property] = rule.errorMessage
      }
    }

    setFormState((prev,) => ({
      ...prev,
      isInputValid,
      errors,
    }),)

    return isInputValid
  }

  return { validateFormValues, }
}