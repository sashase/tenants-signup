import { useFormStateContext, } from "../contexts/form-state.context"
import OverviewItem from "./OverviewItem"

export default function OverviewPage() {
  const { formState, } = useFormStateContext()
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full md:w-4/5 xl:w-1/2 outline outline-1 outline-gray-200 px-6 py-4 rounded-3xl">
      <OverviewItem label="Vorname" value={formState.values.firstName} />
      <OverviewItem label="Nachname" value={formState.values.lastName} />
      <OverviewItem label="Email" value={formState.values.email} />
      <OverviewItem
        label="Telefonnummer"
        value={formState.values.phoneNumber}
      />
      <OverviewItem label="Income" value={formState.values.income} />
    </div>
  )
}
