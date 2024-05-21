import useFormStateContext from "../hooks/useFormStateContext"
import FieldInput from "./FieldInput"

export default function NamePage() {
  const { formState, handleInput, } = useFormStateContext()
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput
        type="text"
        name="firstName"
        placeholder="Vorname"
        value={formState.values.firstName}
        onChange={handleInput}
        errorMessage={formState.errors?.firstName}
      />
      <FieldInput
        type="text"
        name="lastName"
        placeholder="Nachname"
        value={formState.values.lastName}
        onChange={handleInput}
        errorMessage={formState.errors?.lastName}
      />
    </div>
  )
}
