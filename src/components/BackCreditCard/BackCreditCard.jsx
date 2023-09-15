import React from 'react';
import './BackCreditCard.css'; 

const BackCreditCard = ({ cvc }) => {
  return (
    <div className="credit-card-backface">
      <div className="credit-card-body">
        <div className="cvc">{cvc}</div>
      </div>
    </div>
  );
};

export default BackCreditCard;
