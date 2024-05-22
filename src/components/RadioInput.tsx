import { MouseEvent, } from "react"

interface RadioInputProps {
  value: string
  name: string
  isSelected: boolean
  onClick(event: MouseEvent<HTMLInputElement>): void
  dataCy: string
}

export default function RadioInput({
  value,
  name,
  isSelected,
  onClick,
  dataCy,
}: RadioInputProps,) {
  return (
    <label
      htmlFor={value}
      data-cy={dataCy}
      className={`text-xl md:text-2xl text-center outline outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl cursor-pointer transition-all w-full md:w-4/5 ${
        isSelected
          ? "bg-blue-500 text-white outline-0"
          : "bg-transparent text-gray-500 outline-1"
      }`}
    >
      <span>{value}</span>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onClick={onClick}
        className="absolute h-0 w-0 appearance-none"
      />
    </label>
  )
}
