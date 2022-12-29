import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import signupImg from "../../../assets/img/signup/signup-img.png";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Signup.css";

const signUpReducer = (prevState, action) => {
  if (action.type === "FIRSTNAME_INPUT_CHANGED") {
    return {
      firstName: action.value,
      email: prevState.email,
      password: prevState.password,
      formIsValid:
        action.value &&
        prevState.email.includes("@") &&
        prevState.password.length > 6,
    };
  }
  if (action.type === "EMAIL_INPUT_CHANGED") {
    return {
      firstName: prevState.firstName,
      email: action.value,
      password: prevState.password,
      formIsValid:
        prevState.firstName &&
        action.value.includes("@") &&
        prevState.password.length > 6,
    };
  }
  if (action.type === "PASSWORD_INPUT_CHANGED") {
    return {
      firstName: prevState.firstName,
      email: prevState.email,
      password: action.value,
      formIsValid:
        prevState.firstName &&
        prevState.email.includes("@") &&
        action.value.length > 6,
    };
  }
};

const Signup = () => {
  const [signUpState, signUpDispatch] = useReducer(signUpReducer, {
    firstName: "",
    email: "",
    password: "",
    formIsValid: false,
  });
  const navigate = useNavigate();

  const firstNameChangeHandler = (e) => {
    signUpDispatch({
      type: "FIRSTNAME_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const emailChangeHandler = (e) => {
    signUpDispatch({
      type: "EMAIL_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const passwordChangeHandler = (e) => {
    signUpDispatch({
      type: "PASSWORD_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/auth/login");
  };

  return (
    <section id="signup-container">
      <div className="signup">
        <figure className="signup-img-container">
          <div className="filter"></div>
          <img src={signupImg} alt="Honey toast bread" className="signup-img" />
        </figure>
        <div className="signup-form-container">
          <div className="signup-form">
            <header>
              <h3 className="signup-form-title">Welcome to Lilies!</h3>
            </header>
            <FormCard submitHandler={signUpSubmitHandler}>
              <Input
                type="text"
                placeholder="Your First Name"
                value={signUpState.firstName}
                onChangeHandler={firstNameChangeHandler}
              />
              <Input
                type="email"
                placeholder="Your Email address"
                value={signUpState.email}
                onChangeHandler={emailChangeHandler}
              />
              <Input
                type="password"
                placeholder="Your Password"
                value={signUpState.password}
                onChangeHandler={passwordChangeHandler}
              />
              <Button
                type="submit"
                label="SIGN UP"
                formIsValid={signUpState.formIsValid}
              />
            </FormCard>
            <div className="account-login-action">
              <p>
                Already Have an account ?
                <a href="/auth/login" className="signup-login-link">
                  LOGIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
