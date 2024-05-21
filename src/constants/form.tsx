import { ReactElement, } from "react"
import NamePage from "../components/NamePage"
import ContactsPage from "../components/ContactsPage"
import IncomePage from "../components/IncomePage"
import OverviewPage from "../components/OverviewPage"
import SuccessPage from "../components/SuccessPage"

export const PAGE_COMPONENTS: ReactElement[] = [
  <NamePage />,
  <ContactsPage />,
  <IncomePage />,
  <OverviewPage />,
  <SuccessPage />,
]

export const PAGE_TITLES: string[] = [
  "Wie heißen Sie?",
  "Wie erreichen wir Sie?",
  "Ihr Einkommen?",
  "Ist das richtig?",
  "Danke",
]
