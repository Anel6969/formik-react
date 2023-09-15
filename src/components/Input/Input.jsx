import React from 'react';
import './Input.css'; 
import { useField } from 'formik';

const Input = ({ label, id, type, ...rest }) => {
  const [field, meta] = useField(id);
  const isError = meta.touched && meta.error;

  return (
    <div className={`form-group ${isError ? 'has-error' : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        className={`form-control ${isError ? 'is-invalid' : ''}`}
        {...field}
        {...rest}
      />
      {isError && <div className="invalid-feedback">{meta.error}</div>}
    </div>
  );
};

export default Input;
