// ForgotPasswordPage.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [userID, setUserID] = useState('');
  const [otp, setOtp] = useState('');

  const handleProceed = () => {
    // Perform proceed logic here
    // For this example, let's just log the input values
    console.log('User ID:', userID);
    console.log('OTP:', otp);
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <div>
        <h2>Enter Details</h2>
        <form>
          <label>Enter User ID:</label>
          <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />

          <label>Enter OTP:</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </form>
      </div>
    
      <Link to = "/login/setnewpassword"><button type="button" onClick={handleProceed}>Proceed</button></Link>
    
      
      <button type="button">Back</button>
    </div>
  );
};

export default ForgotPasswordPage;
