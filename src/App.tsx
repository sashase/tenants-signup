import { Route, Routes, } from "react-router-dom"
import Root from "./components/Root"
import Form from "./components/Form"
import FormStateContextProvider from "./contexts/form-state.context"

function App() {
  return (
    <>
      <Routes>
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
    </>
  )
}

export default App
