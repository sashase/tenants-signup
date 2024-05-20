import { ReactElement, } from "react"
import { useFormStateContext, } from "../contexts/form-state.context"

export function useMultipageForm(pages: ReactElement[],) {
  const { formState, setFormState, } = useFormStateContext()
  const { currentPageIndex, } = formState

  const next = () => {
    setFormState((prev,) => {
      const newIndex = currentPageIndex === pages.length - 1 ? currentPageIndex : currentPageIndex + 1

      return {
        ...prev,
        currentPageIndex: newIndex,
      }
    },)
  }

  const prev = () => {
    setFormState((prev,) => {
      const newIndex = currentPageIndex === 0 ? currentPageIndex : currentPageIndex - 1

      return {
        ...prev,
        currentPageIndex: newIndex,
      }
    },)
  }

  return {
    currentPageIndex,
    currentPage: pages[currentPageIndex],
    next,
    prev,
    isFirstPage: currentPageIndex === 0,
    isOverviewPage: currentPageIndex === pages.length - 2,
    isSuccessPage: currentPageIndex === pages.length - 1,
  }
}