import { ChangeEvent, HTMLInputTypeAttribute, } from "react"

interface FieldInputProps {
  type: HTMLInputTypeAttribute
  name: string
  placeholder: string
  value: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

export default function FieldInput({
  type,
  name,
  placeholder,
  value,
  onChange,
}: FieldInputProps,) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-xl md:text-2xl outline outline-1 outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl w-full"
    />
  )
}
