import FieldInput from "./FieldInput"

export default function NamePage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput type="text" name="firstName" placeholder="Vorname" />
      <FieldInput type="text" name="lastName" placeholder="Nachname" />
    </div>
  )
}
