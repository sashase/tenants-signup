import {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
  ChangeEvent,
  MouseEvent,
} from "react"
import { FormState, } from "../interfaces"

interface FormStateContextProviderProps {
  children: ReactNode
}

interface FormStateContext {
  formState: FormState
  setFormState: Dispatch<SetStateAction<FormState>>
}

const INITIAL_FORM_STATE: FormState = {
  currentPageIndex: 0,
  values: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    income: "",
  },
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

// eslint-disable-next-line react-refresh/only-export-components
export function useFormStateContext() {
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

  return {
    formState,
    setFormState,
    handleInput,
  }
}
