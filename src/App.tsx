import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./components/Layout";
import EmployeesPage from "./pages/EmployeesPage";
import OrganizationPage from "./pages/OrganizationPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/employees"
          element={<EmployeesPage />}
        />

        <Route
          path="/organization"
          element={<OrganizationPage />}
        />

        <Route
          path="/"
          element={
            <Navigate
              to="/employees"
              replace
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;