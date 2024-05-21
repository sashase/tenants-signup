interface LoadingSpinnerProps {
  label?: string
}

export default function LoadingSpinner({ label, }: LoadingSpinnerProps,) {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-gray-600 border-4 border-solid border-current border-r-transparent rounded-full align-[-0.125em] animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] h-6 w-6" />
      {label && (
        <span className="text-xl md:text-2xl text-gray-600">{label}</span>
      )}
    </div>
  )
}
