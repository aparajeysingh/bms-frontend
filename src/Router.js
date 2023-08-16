// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NewUserPage from './NewUserPage';
import OpenAccountPage from './OpenAccountPage';
import ForgotUserIdPage from './ForgotUserIDPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import SetNewPasswordPage from './SetNewPasswordPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<NewUserPage />} />
        <Route path="/openaccount" element={<OpenAccountPage />} />
        <Route path="/login/forgotuserid" element={<ForgotUserIdPage />} />
        <Route path="/login/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/login/setnewpassword" element={<SetNewPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
