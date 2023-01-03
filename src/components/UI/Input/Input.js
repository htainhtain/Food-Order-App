import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className={`${classes["auth-input"]} ${classes[`${props.className}`]}`}
      value={props.value}
      onChange={props.onChangeHandler}
      onBlur={props.onBlurHandler}
    />
  );
};

export default Input;
