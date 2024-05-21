import { Page, } from "../interfaces"
import NamePage from "../components/NamePage"
import ContactsPage from "../components/ContactsPage"
import IncomePage from "../components/IncomePage"
import OverviewPage from "../components/OverviewPage"
import SuccessPage from "../components/SuccessPage"

export const PAGES: Page[] = [
  { component: <NamePage />, title: "Wie heißen Sie?", },
  { component: <ContactsPage />, title: "Wie erreichen wir Sie?", },
  { component: <IncomePage />, title: "Ihr Einkommen?", },
  { component: <OverviewPage />, title: "Ist das richtig?", },
  { component: <SuccessPage />, title: "Danke", },
]
