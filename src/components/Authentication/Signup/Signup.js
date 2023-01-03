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
      firstNameIsValid: action.value ? true : false,
      emailIsValid: prevState.emailIsValid,
      passwordIsValid: prevState.passwordIsValid,
      formIsValid: action.value
        ? true
        : false && prevState.emailIsValid && prevState.passwordIsValid,
    };
  }
  if (action.type === "EMAIL_INPUT_CHANGED") {
    return {
      firstName: prevState.firstName,
      email: action.value,
      password: prevState.password,
      firstNameIsValid: prevState.firstNameIsValid,
      emailIsValid: action.value.includes("@"),
      passwordIsValid: prevState.passwordIsValid,
      formIsValid:
        prevState.firstNameIsValid &&
        action.value.includes("@") &&
        prevState.passwordIsValid,
    };
  }
  if (action.type === "PASSWORD_INPUT_CHANGED") {
    return {
      firstName: prevState.firstName,
      email: prevState.email,
      password: action.value,
      firstNameIsValid: prevState.firstNameIsValid,
      emailIsValid: prevState.emailIsValid,
      passwordIsValid: action.value.length > 6,
      formIsValid:
        prevState.firstNameIsValid &&
        prevState.emailIsValid &&
        action.value.length > 6,
    };
  }
};

const Signup = () => {
  const [signUpState, signUpDispatch] = useReducer(signUpReducer, {
    firstName: "",
    email: "",
    password: "",
    firstNameIsValid: true,
    emailIsValid: true,
    passwordIsValid: true,
    formIsValid: false,
  });
  const navigate = useNavigate();

  const firstNameChangeHandler = (e) => {
    signUpDispatch({
      type: "FIRSTNAME_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const firstNameOnBlurHandler = (e) => {
    if (!signUpState.firstNameIsValid) {
      e.currentTarget.focus();
    }
  };

  const emailChangeHandler = (e) => {
    signUpDispatch({
      type: "EMAIL_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const emailOnBlurHandler = (e) => {
    if (!signUpState.emailIsValid) {
      e.currentTarget.focus();
    }
  };

  const passwordChangeHandler = (e) => {
    signUpDispatch({
      type: "PASSWORD_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const passwordOnBlurHandler = (e) => {
    if (!signUpState.passwordIsValid) {
      e.currentTarget.focus();
    }
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
                onBlurHandler={firstNameOnBlurHandler}
                className={!signUpState.firstNameIsValid ? "not-valid" : ""}
              />
              <Input
                type="email"
                placeholder="Your Email address"
                value={signUpState.email}
                onChangeHandler={emailChangeHandler}
                onBlurHandler={emailOnBlurHandler}
                className={!signUpState.emailIsValid ? "not-valid" : ""}
              />
              <Input
                type="password"
                placeholder="Your Password"
                value={signUpState.password}
                onChangeHandler={passwordChangeHandler}
                onBlurHandler={passwordOnBlurHandler}
                className={!signUpState.passwordIsValid ? "not-valid" : ""}
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
