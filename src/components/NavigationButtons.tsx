import { Link, } from "react-router-dom"

interface NavigationButtonsProps {
  isFirstPage: boolean
  isOverviewPage: boolean
  isSuccessPage: boolean
  prev(): void
}

export default function NavigationButtons({
  isFirstPage,
  isOverviewPage,
  isSuccessPage,
  prev,
}: NavigationButtonsProps,) {
  return (
    <div className="flex items-center justify-center gap-7">
      {!isFirstPage && !isSuccessPage && (
        <button
          type="button"
          onClick={prev}
          className="text-xl md:text-2xl text-black px-8 py-3 outline outline-1 outline-gray-200 rounded-3xl shadow-md shadow-gray-100"
        >
          Zurück
        </button>
      )}

      {!isSuccessPage ? (
        <button
          type="submit"
          data-cy="button-next-page"
          className="bg-blue-500 text-xl md:text-2xl text-white px-8 py-3 rounded-3xl shadow-md shadow-gray-100"
        >
          {isOverviewPage ? "Fertig" : "Weiter"}
        </button>
      ) : (
        <Link
          to="/"
          data-cy="button-end-flow"
          className="bg-blue-500 text-xl md:text-2xl text-white px-8 py-3 rounded-3xl shadow-md shadow-gray-100"
        >
          Beenden
        </Link>
      )}
    </div>
  )
}
