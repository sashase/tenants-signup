import { ChangeEvent, HTMLInputTypeAttribute, } from "react"

interface FieldInputProps {
  type: HTMLInputTypeAttribute
  name: string
  placeholder: string
  value: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
  errorMessage?: string
}

export default function FieldInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
}: FieldInputProps,) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-xl md:text-2xl outline outline-1 outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl w-full"
      />
      {errorMessage && (
        <p className="text-xl md:text-2xl text-red-500 text-center">
          {errorMessage}
        </p>
      )}
    </>
  )
}
