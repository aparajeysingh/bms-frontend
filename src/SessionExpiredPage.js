// LoggedOutPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SessionExpiredPage = () => {
  return (
    <div>
      <h1>You have been logged out</h1>
      <p>
        Click <Link to="/login">here</Link> to go to the login page.
      </p>
    </div>
  );
};

export default SessionExpiredPage;
