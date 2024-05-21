import { FormStateContext, } from "../contexts/form-state.context"

export default function useSubmitForm({ formState, setFormState, }: FormStateContext,) {
  const setLoading = (value: boolean,) => {
    setFormState((prev,) => ({
      ...prev,
      isLoading: value,
    }),)
  }

  const submitForm = async () => {
    const values = formState.values
    // process 'values', send via API, etc.
    console.log("Values: ", values,)

    // simulating an API call with 1 second delay
    setLoading(true,)
    await new Promise((resolve,) => setTimeout(resolve, 1000,),)
    setLoading(false,)
  }

  return submitForm
}