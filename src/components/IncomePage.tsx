import useFormStateContext from "../hooks/useFormStateContext"
import RadioInput from "./RadioInput"

const OPTIONS: string[] = [
  "€0 - €1.000",
  "€1.000 - €2.000",
  "€2.000 - €3.000",
  "€3.000 - €4.000",
  "Mehr als €4.000",
]

const RADIO_INPUT_NAME: string = "income"

export default function IncomePage() {
  const { formState, handleInput, } = useFormStateContext()
  const errorMessage = formState.errors?.income
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      {OPTIONS.map((option,) => (
        <RadioInput
          value={option}
          name={RADIO_INPUT_NAME}
          isSelected={formState.values.income === option}
          onClick={handleInput}
          key={option}
        />
      ),)}
      {errorMessage && (
        <p className="text-xl md:text-2xl text-red-500 text-center">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
