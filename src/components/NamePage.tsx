import useFormStateContext from "../hooks/useFormStateContext"
import useFormInput from "../hooks/useFormInput"
import FieldInput from "./FieldInput"

export default function NamePage() {
  const context = useFormStateContext()
  const { values, errors, onInteraction, } = useFormInput(context,)
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput
        type="text"
        name="firstName"
        placeholder="Vorname"
        value={values.firstName}
        onChange={onInteraction}
        errorMessage={errors?.firstName}
        dataCy="input-firstName"
      />
      <FieldInput
        type="text"
        name="lastName"
        placeholder="Nachname"
        value={values.lastName}
        onChange={onInteraction}
        errorMessage={errors?.lastName}
        dataCy="input-lastName"
      />
    </div>
  )
}
