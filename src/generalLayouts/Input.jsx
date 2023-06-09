import React from "react";
import inputStyles from "./inputStyles.module.css";

const Input = ({
  name,
  placeholder,
  id,
  text,
  type,
  value,
  onChange,
  className,
  onBlur,
  inputClass,
}) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass}
      />
      <p className={className}>{text}</p>
    </div>
  );
};

export default Input;
