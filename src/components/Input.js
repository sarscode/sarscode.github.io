import React from "react";
import PropTypes from "prop-types";

function Input({
  type,
  placeholder,
  name,
  value,
  isRequired,
  onChange,
  autoComplete
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={isRequired}
      autoComplete={autoComplete ? "on" : "off"}
      value={value}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  type: "text",
  isRequired: false,
  autoComplete: false
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  autoComplete: PropTypes.bool
};

export default Input;
