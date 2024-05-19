import { ReactElement, useState, } from "react"

export function useMultipageForm(pages: ReactElement[],) {
  const [currentPageIndex, setCurrentPageIndex,] = useState<number>(0,)

  const next = () => {
    setCurrentPageIndex((i,) => {
      if (i === pages.length - 1) return i
      return i + 1
    },)
  }

  const prev = () => {
    setCurrentPageIndex((i,) => {
      if (i === 0) return i
      return i - 1
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