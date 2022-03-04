import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CompanyDetailsContextProvider } from "./contexts/CompanyDetailsContext";
import PointsPage from "./pages/points/PointsPage";
import AccountContent from "./pages/account/AccountContent";
import Companies from "./pages/companies/Companies";
import CompanyDetails from "./pages/companies/CompanyDetails";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import MainPage from "./pages/mainpage/MainPage";
import Offers from "./pages/offers/Offers";
import Points from "./pages/points/Points";

export const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/companies" element={<Companies />} />
    <Route
      path="/companies/:companyId"
      element={
        <>
          <CompanyDetailsContextProvider>
            <CompanyDetails />
          </CompanyDetailsContextProvider>
        </>
      }
    />
    <Route path="/points" element={<PointsPage />} />
    <Route path="/profile" element={<AccountContent />} />
    <Route path="/offers" element={<Offers />} />
    <Route path="/info" element={<Info />} />
    <Route path="*" element={<Companies />} />
  </Routes>
);
