
import React, { useState } from 'react';
// import './App.css';

function TransferSuccessfulPage() {
  const [referenceId, setReferenceId] = useState('');
  const [mode, setMode] = useState('');
  const [paidToAccount, setPaidToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [onDate, setOnDate] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <div className="TransferSuccessfulPage">
      <h1>Transfer Successful</h1>
      <form>
        <label>Reference Id:</label>
        <input type="text" value={referenceId} onChange={(e) => setReferenceId(e.target.value)} />

        <label>Mode:</label>
        <input type="text" value={mode} onChange={(e) => setMode(e.target.value)} />

        <label>Paid To Account:</label>
        <input type="text" value={paidToAccount} onChange={(e) => setPaidToAccount(e.target.value)} />

        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <label>From Account:</label>
        <input type="text" value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} />

        <label>On Date:</label>
        <input type="date" value={onDate} onChange={(e) => setOnDate(e.target.value)} />

        <label>Remarks:</label>
        <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)}></textarea>
      </form>
    </div>
  );
}

export default TransferSuccessfulPage;

