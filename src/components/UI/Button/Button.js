import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  let buttonIsDisabled = false;
  if (props.formIsValid !== undefined) {
    buttonIsDisabled = props.formIsValid ? false : true;
  }

  return (
    <button
      type={props.type}
      className={classes.button}
      disabled={buttonIsDisabled}
      onClick={props.onClickHandler}
    >
      {props.label}
    </button>
  );
};

export default Button;
