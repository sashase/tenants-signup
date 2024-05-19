interface ProgressBarProps {
  currentPageIndex: number
}

export default function ProgressBar({ currentPageIndex, }: ProgressBarProps,) {
  return (
    <div className="absolute top-0 left-0 bg-gray-300 w-full h-2">
      <div
        className={`bg-blue-500 h-2 transition-all duration-500 ${
          currentPageIndex === 0
            ? "w-0"
            : currentPageIndex === 1
            ? "w-1/4"
            : currentPageIndex === 2
            ? "w-2/4"
            : currentPageIndex === 3
            ? "w-3/4"
            : "w-full"
        }`}
      />
    </div>
  )
}
