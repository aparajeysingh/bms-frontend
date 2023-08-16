// LoginPage.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, such as checking user credentials
    // For this example, let's just log the input values
    console.log('User ID:', userId);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <div>
            <ul>
            <li><Link to = "/openaccount">First Time User</Link></li>
            <li><Link to = "/login/forgotuserid">Forgot User Id</Link></li>
            <li><Link to = "/login/forgotpassword">Forgot Password</Link></li>
            </ul>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
