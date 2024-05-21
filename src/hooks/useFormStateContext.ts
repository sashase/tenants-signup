import { useContext, ChangeEvent, MouseEvent, } from "react"
import { VALIDATION_RULES, } from "../constants"
import { FormStateContext, } from "../contexts/form-state.context"
import { FormValues, ValidationRule, } from "../interfaces"

export default function useFormStateContext() {
  const context = useContext(FormStateContext,)
  if (!context) {
    throw new Error(
      "useFormStateContext must be used within a FormStateContextProvider",
    )
  }
  const { formState, setFormState, } = context

  const handleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>,) => {
    const { name, value, } = target as HTMLInputElement

    setFormState((prev,) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }),)
  }

  const validateInput = (): boolean => {
    const { currentPageIndex, values, } = formState
    const pageRules = VALIDATION_RULES[currentPageIndex]

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
      if (!rule.pattern.test(values[property],)) {
        isInputValid = false
        errors[property] = rule.errorMessage
      }
    }

    setFormState(({ currentPageIndex, values, },) => ({
      currentPageIndex,
      values,
      isInputValid,
      errors,
    }),)

    return isInputValid
  }

  return {
    formState,
    setFormState,
    handleInput,
    validateInput,
  }
}
