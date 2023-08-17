// DashboardPage.js
import React from 'react';
import './DashboardPage.css'; // Import your CSS styles for the page

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Account Details</li>
          <li>Account Summary</li>
          <li>Funds Transfer</li>
          <li>Account Statement</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="content">
          <h2>Main Content Area</h2>
          {/* Your main content goes here */}
        </div>
        <div className="navbar">
          <ul>
            <li>Account Statement</li>
            <li>Funds Transfer</li>
            <li>User Profile</li>
            <li>Change User ID Password</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
