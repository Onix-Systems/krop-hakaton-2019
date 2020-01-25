import React from 'react';
import ErrorIcon from '../../../../images/svg/error.svg';

const Error = ({ text }) => (
  <div className="error">
    <img className="error-icon" src={ErrorIcon} alt="error" />
    <span className="error-text">{text}</span>
  </div>
);

export default Error;
