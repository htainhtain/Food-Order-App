import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className={classes["auth-input"]}
      value={props.value}
      onChange={props.onChangeHandler}
    />
  );
};

export default Input;
