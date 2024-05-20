import FieldInput from "./FieldInput"

export default function ContactsPage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      <FieldInput type="email" name="email" placeholder="E-mail" />
      <FieldInput type="tel" name="phoneNumber" placeholder="Telefonnummer" />
    </div>
  )
}
