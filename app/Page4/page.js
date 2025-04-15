import React from 'react';
import '../globals.css';
import Link from 'next/link';
const ProductLifecycle = () => {
  return (
    <div className="service-wrapper">
      <div className="service-header">
        <h2>Product Lifecycle Management</h2>
      
      <div className="button-group">
        <button className="btn-black">Go Back</button>
        <Link href="/" >
        <button className="btn-green">Back to Home</button>
        </Link>
      </div>
      </div>
    <div className="service-page">
      <h1>Product Lifecycle Management</h1>
      <ul>
        <li>Product Lifecycle strategy</li>
        <li>Alternatives to formulation strategy and development</li>
        <li>Regulatory Strategy</li>
      </ul>
    </div>
    </div>
  );
};

export default ProductLifecycle;
