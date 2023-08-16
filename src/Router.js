// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NewUserPage from './NewUserPage';
import OpenAccountPage from './OpenAccountPage';
import ForgotUserIdPage from './ForgotUserIDPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import SetNewPasswordPage from './SetNewPasswordPage';

const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/newuser" element={<NewUserPage/>} />
        <Route path="/openaccount" element={<OpenAccountPage/>} />
        <Route path="/login/forgotuserid" element={<ForgotUserIdPage/>} />
        <Route path="/login/forgotpassword" element={<ForgotPasswordPage/>} />
        <Route path="/login/setnewpassword" element={<SetNewPasswordPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
