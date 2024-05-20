import OverviewItem from "./OverviewItem"

export default function OverviewPage() {
  const formState = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    phoneNumber: "+49123456789",
    income: "€3.000 - €4.000",
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full md:w-4/5 xl:w-1/2 outline outline-1 outline-gray-200 px-6 py-4 rounded-3xl">
      <OverviewItem label="Vorname" value={formState.firstName} />
      <OverviewItem label="Nachname" value={formState.lastName} />
      <OverviewItem label="Email" value={formState.email} />
      <OverviewItem label="Telefonnummer" value={formState.phoneNumber} />
      <OverviewItem label="Income" value={formState.income} />
    </div>
  )
}
