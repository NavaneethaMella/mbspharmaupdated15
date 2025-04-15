import React from 'react';
import '../globals.css';
import Link from 'next/link';
const GMPCompliance = () => {
  return (
    <div className="service-wrapper">
      <div className="service-header">
        <h2>GMP Compilance and Assessments</h2>
      
      <div className="button-group">
        <button className="btn-black">Go Back</button>
        <Link href="/" >
        <button className="btn-green">Back to Home</button>
        </Link>
      </div>
      </div>
    <div className="service-page">
      <h1>GMP Compliance and Assessments</h1>
      <ul>
        <li>GMP audits and general consulting (Collaboration partner)</li>
        <li>Quality Management System development and reviews</li>
        <li>Validation Master Plans</li>
        <li>Risk Assessments – Elemental Impurities, Nitrosamines etc…</li>
      </ul>
    </div>
    </div>
  );
};

export default GMPCompliance;
