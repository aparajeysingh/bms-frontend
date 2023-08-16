// Login.js
// RegisterPage.js
import React, { useState } from 'react';

const NewUserPage = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [confirmLoginPassword, setConfirmLoginPassword] = useState('');
  const [transactionPassword, setTransactionPassword] = useState('');
  const [confirmTransactionPassword, setConfirmTransactionPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    // For this example, let's just log the input values
    console.log('Account Number:', accountNumber);
    console.log('Login Password:', loginPassword);
    console.log('Transaction Password:', transactionPassword);
    console.log('OTP:', otp);
  };

  return (
    <div>
      <h1>Register for Internet Banking</h1>
      <form>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Set Login Password:</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Login Password:</label>
          <input
            type="password"
            value={confirmLoginPassword}
            onChange={(e) => setConfirmLoginPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Set Transaction Password:</label>
          <input
            type="password"
            value={transactionPassword}
            onChange={(e) => setTransactionPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Transaction Password:</label>
          <input
            type="password"
            value={confirmTransactionPassword}
            onChange={(e) => setConfirmTransactionPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUserPage;

