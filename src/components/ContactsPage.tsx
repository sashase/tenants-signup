import useFormStateContext from "../hooks/useFormStateContext"
import useFormInput from "../hooks/useFormInput"
import FieldInput from "./FieldInput"

export default function ContactsPage() {
  const context = useFormStateContext()
  const { values, errors, onInteraction, } = useFormInput(context,)
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput
        type="email"
        name="email"
        placeholder="E-mail"
        value={values.email}
        onChange={onInteraction}
        errorMessage={errors?.email}
        dataCy="input-email"
      />
      <FieldInput
        type="tel"
        name="phoneNumber"
        placeholder="Telefonnummer"
        value={values.phoneNumber}
        onChange={onInteraction}
        errorMessage={errors?.phoneNumber}
        dataCy="input-phoneNumber"
      />
    </div>
  )
}
