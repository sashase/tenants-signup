import { HTMLInputTypeAttribute, } from "react"

interface FieldInputProps {
  type: HTMLInputTypeAttribute
  name: string
  placeholder: string
}

export default function FieldInput({
  type,
  name,
  placeholder,
}: FieldInputProps,) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-xl md:text-2xl outline outline-1 outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl w-full"
    />
  )
}
