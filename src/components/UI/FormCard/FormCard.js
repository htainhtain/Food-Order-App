import React from "react";

import "./FormCard.css";

const FormCard = (props) => {
  return (
    <form className="form-card" onSubmit={props.submitHandler}>
      {props.children}
    </form>
  );
};

export default FormCard;
