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
      </Routes>
    </Router>
  );
};

export default AppRouter;
