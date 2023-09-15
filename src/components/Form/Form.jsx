import React from 'react';
import './Form.css'; 
import { Input } from '../Input/Input';
import { Formik, Field } from 'formik';

const CreditCardForm = () => {
  const handleSubmit = (values) => {
    
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        cardHolder: '',
        numbers: '',
        month: '',
        year: '',
        cvc: '',
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        // Ajoutez ici vos règles de validation si nécessaire
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <form onSubmit={handleSubmit} className="credit-card-form">
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <Input
              type="text"
              name="cardHolder"
              id="cardHolder"
              placeholder="e.g. Jane Appleseed"
              className="form-control"
              value={values.cardHolder}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numbers">Card Numbers</label>
            <Input
              type="text"
              name="numbers"
              id="numbers"
              placeholder="e.g. 1234 5678 9123 0000"
              className="form-control"
              value={values.numbers}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="month">Month</label>
              <Field
                type="text"
                name="month"
                id="month"
                placeholder="MM"
                className="form-control"
                value={values.month}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="year">Year</label>
              <Input
                type="text"
                name="year"
                id="year"
                placeholder="YY"
                className="form-control"
                value={values.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <Input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              className="form-control"
              value={values.cvc}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default CreditCardForm;
