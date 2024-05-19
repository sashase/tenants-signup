import { Route, Routes, } from "react-router-dom"
import Root from "./components/Root"
import Form from "./components/Form"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
