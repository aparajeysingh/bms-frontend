// ForgotUserIdPage.js
import React, { useState } from 'react';

const ForgotUserIdPage = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleProceed = () => {
    // Perform proceed logic here
    // For this example, let's just log the input values
    console.log('Account Number:', accountNumber);
    console.log('OTP:', otp);
  };

  return (
    <div>
      <h1>Forgot User ID</h1>
      <form>
        <label>Enter Account Number:</label>
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />

        <label>Enter OTP:</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      </form>
      <button type="button" onClick={handleProceed}>
        Proceed
      </button>
      <button type="button">Back</button>
    </div>
  );
};

export default ForgotUserIdPage;
