import { useContext, } from "react"
import { FormStateContext, } from "../contexts/form-state.context"

export default function useFormStateContext() {
  const context = useContext(FormStateContext,)
  if (!context) {
    throw new Error(
      "useFormStateContext must be used within a FormStateContextProvider",
    )
  }

  return context
}
