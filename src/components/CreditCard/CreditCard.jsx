import React from 'react';
import './CreditCard.css'; 

const CreditCard = ({ cardHolder, numbers, month, year }) => {
  return (
    <div className="credit-card">
      <div className="credit-card-body">
        <div className="background-circle"></div>
        <div className="card-numbers">{numbers}</div>
        <div className="card-details">
          <div className="card-holder">{cardHolder}</div>
          <div className="card-expiry">
            <span className="expiry-month">{month}</span>/
            <span className="expiry-year">{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
