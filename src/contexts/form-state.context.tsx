import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react"
import { FormState, } from "../interfaces"
import { INITIAL_FORM_STATE, } from "../constants"

interface FormStateContextProviderProps {
  children: ReactNode
}

interface FormStateContext {
  formState: FormState
  setFormState: Dispatch<SetStateAction<FormState>>
}

export const FormStateContext = createContext<FormStateContext | null>(null,)

export default function FormStateContextProvider({
  children,
}: FormStateContextProviderProps,) {
  const [formState, setFormState,] = useState<FormState>(INITIAL_FORM_STATE,)

  return (
    <FormStateContext.Provider value={{ formState, setFormState, }}>
      {children}
    </FormStateContext.Provider>
  )
}
