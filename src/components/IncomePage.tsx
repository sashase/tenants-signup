import { MouseEvent, useState, } from "react"
import RadioInput from "./RadioInput"

const OPTIONS: string[] = [
  "€0 - €1.000",
  "€1.000 - €2.000",
  "€2.000 - €3.000",
  "€3.000 - €4.000",
  "Mehr als €4.000",
]

export default function IncomePage() {
  const [selectedIncome, setSelectedIncome,] = useState<string>("",)

  const handleClick = (event: MouseEvent<HTMLInputElement>,) => {
    const { value, } = event.target as HTMLInputElement
    setSelectedIncome(value !== selectedIncome ? value : "",)
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full md:w-4/5 xl:w-2/5">
      {OPTIONS.map((option,) => (
        <RadioInput
          value={option}
          isSelected={selectedIncome === option}
          handleClick={handleClick}
          key={option}
        />
      ),)}
    </div>
  )
}
