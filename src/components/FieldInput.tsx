import { ChangeEvent, HTMLInputTypeAttribute, } from "react"
import ErrorMessage from "./ErrorMessage"

interface FieldInputProps {
  type: HTMLInputTypeAttribute
  name: string
  placeholder: string
  value: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
  errorMessage?: string
  dataCy?: string
}

export default function FieldInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
  dataCy,
}: FieldInputProps,) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-cy={dataCy}
        className="text-xl md:text-2xl outline outline-1 outline-gray-200 focus:outline-offset-0 shadow-md shadow-gray-100 px-6 py-4 rounded-3xl w-full"
      />
      {errorMessage && <ErrorMessage content={errorMessage} />}
    </>
  )
}
