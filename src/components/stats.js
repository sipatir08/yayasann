import React from "react";
import "../assets/stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-card">
        <h3 className="stat-number">2</h3>
        <p className="stat-label">Panti Asuhan</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">120</h3>
        <p className="stat-label">Anak Panti</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">30</h3>
        <p className="stat-label">Donatur</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">10</h3>
        <p className="stat-label">Pengurus</p>
      </div>
    </div>
  );
};

export default Stats;
