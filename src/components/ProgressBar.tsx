import useFormStateContext from "../hooks/useFormStateContext"

export default function ProgressBar() {
  const { formState, } = useFormStateContext()
  return (
    <div className="absolute top-0 left-0 bg-gray-300 w-full h-2">
      <div
        className={`bg-blue-500 h-2 transition-all duration-500 ${
          formState.currentPageIndex === 0
            ? "w-0"
            : formState.currentPageIndex === 1
            ? "w-1/4"
            : formState.currentPageIndex === 2
            ? "w-2/4"
            : formState.currentPageIndex === 3
            ? "w-3/4"
            : "w-full"
        }`}
      />
    </div>
  )
}
