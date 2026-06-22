import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RoleSelection from "./pages/RoleSelection";
import CustomerDashboard from "./pages/CustomerDashboard";
import BoutiqueDashboard from "./pages/BoutiqueDashboard";
import BoutiquesPage from "./pages/BoutiquesPage";
import BoutiqueDetails from "./pages/BoutiqueDetails";
import CreateRequest from "./pages/CreateRequest";
import RequestDetails from "./pages/RequestDetails";
import RespondRequest from "./pages/RespondRequest";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/role" element={<RoleSelection />} />

        <Route
          path="/customer-dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="/boutique-dashboard"
          element={<BoutiqueDashboard />}
        />

        <Route
          path="/boutiques"
          element={<BoutiquesPage />}
        />

        <Route
          path="/boutiques/:id"
          element={<BoutiqueDetails />}
        />

        <Route
          path="/requests/:id"
          element={<RequestDetails />}
        />

        <Route
          path="/create-request"
          element={<CreateRequest />}
        />

        <Route
          path="/respond/:id"
          element={<RespondRequest />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;