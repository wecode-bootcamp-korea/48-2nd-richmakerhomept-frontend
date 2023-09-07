import React from 'react';
import './DefaultButton.scss';

const DefaultButton = ({ text, onClick }) => {
  return (
    <button className="defaultButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default DefaultButton;
