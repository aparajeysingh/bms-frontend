// OpenAccountPage.js
import React, { useState } from 'react';

const OpenAccountPage = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [dob, setDob] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [occupationType, setOccupationType] = useState('');
  const [sourceOfIncome, setSourceOfIncome] = useState('');
  const [grossAnnualIncome, setGrossAnnualIncome] = useState('');
  const [netBanking, setNetBanking] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleOpenAccount = () => {
    // Perform account opening logic here
    // For this example, let's just log the input values
    console.log('Personal Details:', {
      title,
      firstName,
      middleName,
      lastName,
      fatherName,
      mobileNumber,
      email,
      aadharNumber,
      dob,
    });
    console.log('Residential Address:', {
      addressLine1,
      addressLine2,
      landmark,
      state,
      city,
      pincode,
    });
    console.log('Occupation Details:', {
      occupationType,
      sourceOfIncome,
      grossAnnualIncome,
    });
    console.log('Net Banking:', netBanking);
    console.log('Agree Terms:', agreeTerms);
  };

  return (
    <div>
      <h1>Open a Savings Account</h1>
      <div>
        <h2>Personal Details</h2>
        <form>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

          <label>Middle Name:</label>
          <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />

          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

          <label>Father's Name:</label>
          <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />

          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />

          <label>Email ID:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Aadhar Number:</label>
          <input type="text" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />

          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </form>
      </div>
      <div>
        <h2>Residential Address</h2>
        <form>
          <label>Address Line 1:</label>
          <input type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />

          <label>Address Line 2:</label>
          <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />

          <label>Landmark:</label>
          <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />

          <label>State:</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />

          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

          <label>Pincode:</label>
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
        </form>
      </div>
      <div>
        <h2>Occupation Details</h2>
        <form>
          <label>Occupation Type:</label>
          <input type="text" value={occupationType} onChange={(e) => setOccupationType(e.target.value)} />

          <label>Source of Income:</label>
          <input type="text" value={sourceOfIncome} onChange={(e) => setSourceOfIncome(e.target.value)} />

          <label>Gross Annual Income:</label>
          <input type="text" value={grossAnnualIncome} onChange={(e) => setGrossAnnualIncome(e.target.value)} />
        </form>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={netBanking} onChange={() => setNetBanking(!netBanking)} />
          Net Banking
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
          I Agree
        </label>
      </div>
      <button type="button" onClick={handleOpenAccount}>
        Submit
      </button>
    </div>
  );
};

export default OpenAccountPage;
