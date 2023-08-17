
import React, { useState } from 'react';

function NeftTransactionPage() {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [remark, setRemark] = useState('');

  const handleSave = () => {
    // Implement save logic here
  };

  const handleReset = () => {
    setFromAccount('');
    setToAccount('');
    setAmount('');
    setTransactionDate('');
    setRemark('');
  };

  const handleSaveAsTemplate = () => {
    // Implement save as template logic here
  };

  const handleContinue = () => {
    // Implement continue logic here
  };

  return (
    <div>
      <h1>NEFT Transaction Page</h1>
      <label>
        From Account:
        <input type="text" value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} />
      </label>
      <label>
        To Account:
        <input type="text" value={toAccount} onChange={(e) => setToAccount(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Transaction Date:
        <input type="text" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
      </label>
      <label>
        Remark:
        <input type="text" value={remark} onChange={(e) => setRemark(e.target.value)} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSaveAsTemplate}>Save as Template</button>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default NeftTransactionPage;
