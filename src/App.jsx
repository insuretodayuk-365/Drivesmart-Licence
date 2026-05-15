import { Routes, Route } from "react-router-dom"

import StartPage from "./pages/StartPage"
import EnterDetails from "./pages/EnterDetails"
import Dashboard from "./pages/Dashboard"
import Vehicles from "./pages/Vehicles"
import Penalties from "./pages/Penalties"
import CheckCode from "./pages/CheckCode"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<StartPage />}
      />

      <Route
        path="/enter-details"
        element={<EnterDetails />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/vehicles"
        element={<Vehicles />}
      />

      <Route
        path="/penalties"
        element={<Penalties />}
      />

      <Route
        path="/check-code"
        element={<CheckCode />}
      />
    </Routes>
  )
}

export default App