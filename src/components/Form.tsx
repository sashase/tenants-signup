import { FormEvent, } from "react"
import useMultipageForm from "../hooks/useMultipageForm"
import useFormStateContext from "../hooks/useFormStateContext"
import PageWrapper from "./PageWrapper"
import ProgressBar from "./ProgressBar"
import NavigationButtons from "./NavigationButtons"
import { PAGES, } from "../constants"

export default function Form() {
  const {
    currentPageIndex,
    currentComponent,
    currentTitle,
    next,
    prev,
    isFirstPage,
    isOverviewPage,
    isSuccessPage,
  } = useMultipageForm(PAGES,)

  const { validateInput, formState, } = useFormStateContext()

  const handleOnSubmit = (event: FormEvent,) => {
    event.preventDefault()

    const isInputValid = validateInput()

    if (!isInputValid) return
    if (!isOverviewPage) return next()

    const values = formState.values
    console.log("Values: ", values,)

    // process 'values', send via API, etc.

    next()
  }

  return (
    <div className="w-11/12 md:w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-5">
      <ProgressBar currentPageIndex={currentPageIndex} />
      <form
        onSubmit={handleOnSubmit}
        className="w-full flex flex-col items-center gap-10"
      >
        <PageWrapper title={currentTitle}>{currentComponent}</PageWrapper>
        <NavigationButtons
          isFirstPage={isFirstPage}
          isOverviewPage={isOverviewPage}
          isSuccessPage={isSuccessPage}
          prev={prev}
        />
      </form>
    </div>
  )
}
