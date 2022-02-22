import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Account from "./pages/account/Account";
import Companies from "./pages/companies/Companies";
import CompanyDetails from "./pages/companies/CompanyDetails";
import Home from "./pages/home/Home";
import MainPage from "./pages/mainpage/MainPage";
import Points from "./pages/points/Points";

export const createRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/companies/:companyId" element={<CompanyDetails />} />
    <Route path="/points" element={<Points />} />
    <Route path="/account" element={<Account />} />
    <Route path="*" element={<Companies />} />
  </Routes>
);
