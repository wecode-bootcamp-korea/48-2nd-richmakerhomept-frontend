import React from 'react';
import './DefaultInput.scss';

const DefaultInput = ({ icon, type, onClick, placeholder }) => {
  return (
    <div className="inputContainer">
      {icon}
      <input
        type={type}
        className="defaultInput"
        onClick={onClick}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DefaultInput;
