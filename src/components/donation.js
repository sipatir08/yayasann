import React, { useState } from "react";
import '../assets/donation.css';

const Donation = () => {
  const [amount, setAmount] = useState("");
  
  const handleDonate = () => {
    // Logika untuk memproses donasi dengan QRIS atau API pembayaran
    alert(`Thank you for donating Rp${amount}`);
    // Kirim data donasi ke backend
  };

  return (
    <div className="donation-container">
      <h2>Make a Donation</h2>
      <div className="donation-form">
        <input
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleDonate}>Donate with QRIS</button>
      </div>
    </div>
  );
};

export default Donation;
