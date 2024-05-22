interface ErrorMessageProps {
  content: string
}

export default function ErrorMessage({ content, }: ErrorMessageProps,) {
  return (
    <p
      data-cy="error-message"
      className="text-xl md:text-2xl text-red-500 text-center"
    >
      {content}
    </p>
  )
}
