// SetNewPasswordPage.js
import React, { useState } from 'react';

const SetNewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Perform submit logic here
    // For this example, let's just log the input values
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      <h1>Set New Password</h1>
      <form>
        <label>Enter New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

        <label>Confirm New Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </form>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SetNewPasswordPage;
