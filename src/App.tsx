import { Route, Routes, useLocation, } from "react-router-dom"
import { AnimatePresence, } from "framer-motion"
import Root from "./components/Root"
import Form from "./components/Form"
import FormStateContextProvider from "./contexts/form-state.context"

function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Root />} />
        <Route
          path="/form"
          element={
            <FormStateContextProvider>
              <Form />
            </FormStateContextProvider>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
