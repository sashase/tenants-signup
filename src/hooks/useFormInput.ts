import { ChangeEvent, MouseEvent, } from "react"
import { FormStateContext, } from "../contexts/form-state.context"

export default function useFormInput({ formState, setFormState, }: FormStateContext,) {
  const { values, errors, } = formState

  const onInteraction = ({
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
    values,
    errors,
    onInteraction,
  }
}