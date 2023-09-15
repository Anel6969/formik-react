import React, { useState } from 'react';
import './App.css';
import  CreditCardForm  from './components/Form/Form';
import  CreditCard  from './components/CreditCard/CreditCard';
import BackCreditCard from './components/BackCreditCard/BackCreditCard';

function App() {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  });

  const initialValues = {
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  };

  const onSubmit = (values) => {
    setCreditCardInfo(values);
  };

  return (
    <div className="app-container">
      <div className="credit-card-container">
        <CreditCard
          numbers={creditCardInfo.numbers}
          cardHolder={creditCardInfo.cardHolder}
          month={creditCardInfo.month}
          year={creditCardInfo.year}
        />
        <CreditCardBackface cvc={creditCardInfo.cvc} />
      </div>
      <div className="credit-card-form-container">
        <CreditCardForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default App;
