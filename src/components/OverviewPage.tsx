import useFormStateContext from "../hooks/useFormStateContext"
import OverviewItem from "./OverviewItem"

export default function OverviewPage() {
  const { formState, } = useFormStateContext()
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full md:w-4/5 xl:w-1/2 outline outline-1 outline-gray-200 px-6 py-4 rounded-3xl">
      <OverviewItem
        label="Vorname"
        value={formState.values.firstName}
        dataCy="overview-firstName-value"
      />
      <OverviewItem
        label="Nachname"
        value={formState.values.lastName}
        dataCy="overview-lastName-value"
      />
      <OverviewItem
        label="Email"
        value={formState.values.email}
        dataCy="overview-email-value"
      />
      <OverviewItem
        label="Telefonnummer"
        value={formState.values.phoneNumber}
        dataCy="overview-phoneNumber-value"
      />
      <OverviewItem
        label="Einkommen"
        value={formState.values.income}
        dataCy="overview-income-value"
      />
    </div>
  )
}
