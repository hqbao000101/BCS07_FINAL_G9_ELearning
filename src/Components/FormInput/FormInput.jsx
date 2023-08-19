import React from "react";
import './FormInput.scss';

const FormInput = ({type, placeholder, name}) => {
  const handleFocus = (e) => {
    e.target.select();
  };
  
  return (
    <div id="form__input" className="mb-5 rounded-md shadow-md">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full p-3 duration-300 rounded-md outline-none"
        onFocus={handleFocus}
      />
      <label></label>
    </div>
  );
};

export default FormInput;
