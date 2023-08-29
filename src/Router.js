// Router.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SavingsAccount from "./pages/SavingsAccount/SavingsAccount";
import Register from "./pages/Register/Register";
import UserId from "./pages/Forgot/UserId/UserId";
import Password from "./pages/Forgot/Password/ForgotPassword";
import SetNewPassword from "./pages/Forgot/Password/SetNewPassword";
import Dashboard from "./pages/Dashboard/dashboard.js";
import FundTransfer from "./pages/FundTransfer/";
import AccountStatement from "./pages/AccountStatement/";
import Payee from "./pages/Payee/";
import AdminLogin from "./pages/Login/adminLogin";
import AdminDashboard from "./pages/Dashboard/adminDashboard";
import SessionExpired from "./pages/SessionExpired/sessionExpired"
import PageNotFound from "./pages/PageNotFound/pageNotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/open-new-account" element={<SavingsAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-user-id" element={<UserId />} />
        <Route path="/forgot-password" element={<Password />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/fund-transfer" element={<FundTransfer />} />
        <Route
          path="/dashboard/account-statement"
          element={<AccountStatement />}
        />
        <Route path="/dashboard/add-payee" element={<Payee />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
