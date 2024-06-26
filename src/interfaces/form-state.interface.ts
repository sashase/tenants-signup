import { FormValues, } from "."

export interface FormState {
  currentPageIndex: number
  isInputValid: boolean
  isLoading?: boolean
  values: FormValues
  errors?: { [key in keyof FormValues]?: string }
}