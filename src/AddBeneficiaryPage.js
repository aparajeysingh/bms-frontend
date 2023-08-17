// AddBeneficiaryPage.js
import React, { useState } from 'react';

const AddBeneficiaryPage = () => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reenterAccountNumber, setReenterAccountNumber] = useState('');
  const [nickName, setNickName] = useState('');
  const [saveAsBeneficiary, setSaveAsBeneficiary] = useState(false);

  const handleSaveBeneficiary = () => {
    // Perform save beneficiary logic here
    // For this example, let's just log the input values
    console.log('Beneficiary Name:', beneficiaryName);
    console.log('Account Number:', accountNumber);
    console.log('Nick Name:', nickName);
    console.log('Save As Beneficiary:', saveAsBeneficiary);
  };

  return (
    <div>
      <h1>Add New Beneficiary</h1>
      <form>
        <label>Beneficiary Name:</label>
        <input
          type="text"
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
        />

        <label>Beneficiary Account Number:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <label>Re-enter Account Number:</label>
        <input
          type="text"
          value={reenterAccountNumber}
          onChange={(e) => setReenterAccountNumber(e.target.value)}
        />

        <label>Nick Name:</label>
        <input
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />

        <label>Save as Beneficiary:</label>
        <input
          type="checkbox"
          checked={saveAsBeneficiary}
          onChange={() => setSaveAsBeneficiary(!saveAsBeneficiary)}
        />
      </form>
      <button type="button" onClick={handleSaveBeneficiary}>
        Save as Beneficiary
      </button>
    </div>
  );
};

export default AddBeneficiaryPage;
