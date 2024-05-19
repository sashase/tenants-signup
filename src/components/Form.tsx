import { FormEvent, ReactElement, } from "react"
import { useMultipageForm, } from "../hooks/useMultipageForm"
import PageWrapper from "./PageWrapper"
import NamePage from "./NamePage"
import ContactsPage from "./ContactsPage"
import IncomePage from "./IncomePage"
import OverviewPage from "./OverviewPage"
import SuccessPage from "./SuccessPage"
import ProgressBar from "./ProgressBar"
import NavigationButtons from "./NavigationButtons"

const PAGE_COMPONENTS: ReactElement[] = [
  <NamePage />,
  <ContactsPage />,
  <IncomePage />,
  <OverviewPage />,
  <SuccessPage />,
]

const PAGE_TITLES: string[] = [
  "Wie heißen Sie?",
  "Wie erreichen wir Sie?",
  "Ihr Einkommen?",
  "Ist das richtig?",
  "Danke",
]

export default function Form() {
  const {
    currentPageIndex,
    currentPage,
    next,
    prev,
    isFirstPage,
    isOverviewPage,
    isSuccessPage,
  } = useMultipageForm(PAGE_COMPONENTS,)

  const handleOnSubmit = (event: FormEvent,) => {
    event.preventDefault()
    next()
    if (isOverviewPage) console.log("success",)
  }

  return (
    <div className="w-11/12 md:w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-5">
      <ProgressBar currentPageIndex={currentPageIndex} />
      <form
        onSubmit={handleOnSubmit}
        className="w-full flex flex-col items-center gap-10"
      >
        <PageWrapper title={PAGE_TITLES[currentPageIndex]}>
          {currentPage}
        </PageWrapper>
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
