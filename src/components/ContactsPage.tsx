import { useFormStateContext, } from "../contexts/form-state.context"
import FieldInput from "./FieldInput"

export default function ContactsPage() {
  const { formState, handleInput, } = useFormStateContext()
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput
        type="email"
        name="email"
        placeholder="E-mail"
        value={formState.values.email}
        onChange={handleInput}
        errorMessage={formState.errors?.email}
      />
      <FieldInput
        type="tel"
        name="phoneNumber"
        placeholder="Telefonnummer"
        value={formState.values.phoneNumber}
        onChange={handleInput}
        errorMessage={formState.errors?.phoneNumber}
      />
    </div>
  )
}
