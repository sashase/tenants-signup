import { MouseEvent, } from "react"

interface RadioInputProps {
  value: string
  isSelected: boolean
  handleClick(event: MouseEvent<HTMLInputElement>): void
}

export default function RadioInput({
  value,
  isSelected,
  handleClick,
}: RadioInputProps,) {
  return (
    <label
      htmlFor={value}
      className={`text-xl md:text-2xl text-center outline outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl cursor-pointer transition-all w-full md:w-4/5 ${
        isSelected
          ? "bg-blue-500 text-white outline-0"
          : "bg-transparent text-gray-500 outline-1"
      }`}
    >
      <span>{value}</span>
      <input
        type="radio"
        name={value}
        id={value}
        value={value}
        onClick={handleClick}
        className="absolute h-0 w-0 appearance-none"
      />
    </label>
  )
}
