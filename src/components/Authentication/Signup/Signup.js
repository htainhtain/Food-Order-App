import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";

import signupImg from "../../../assets/img/signup/signup-img.png";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Signup.css";
import { authContext } from "../../../context/AuthContext";

const validateFirstName = (value) => {
  return value.trim().length > 0;
};

const validateEmail = (value) => {
  return value.includes("@");
};

const validatePassword = (value) => {
  return value.length >= 8 && value.length <= 32;
};

const Signup = () => {
  //context
  const { signUpHandler } = useContext(authContext);

  const {
    input: firstName,
    inputIsValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputOnBlur: firstNameOnBlurHandler,
    inputHasError: firstNameHasError,
    resetValue: resetFirstName,
  } = useInput(validateFirstName);

  const {
    input: email,
    inputIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputOnBlur: emailOnBlurHandler,
    inputHasError: emailHasError,
    resetValue: resetEmail,
  } = useInput(validateEmail);

  const {
    input: password,
    inputIsValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputOnBlur: passwordOnBlurHandler,
    inputHasError: passwordHasError,
    resetValue: resetPassword,
  } = useInput(validatePassword);

  // const [signUpError, SetSignUpError] = useState("");
  // const [signUpSuccess, setSignUpSuccess] = useState(null)
  const [alert, setAlert] = useState({
    Alert: null,
    Message: "",
  });
  const [isloading, setIsLoading] = useState(false);

  const formIsValid = firstNameIsValid && emailIsValid && passwordIsValid;

  const resetForm = () => {
    resetFirstName();
    resetEmail();
    resetPassword();
  };

  const formIsSubmitting = () => {
    setIsLoading(true);
  };

  const formIsSubmitted = () => {
    setIsLoading(false);
  };

  // const navigate = useNavigate();

  const signUpAlertHandler = (alert) => {
    setAlert({
      Alert: alert.Alert,
      Message: alert.Message,
    });
  };

  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    signUpHandler(
      firstName,
      email,
      password,
      resetForm,
      signUpAlertHandler,
      formIsSubmitting,
      formIsSubmitted
    );
    // navigate("/auth/login");
  };

  console.log("alert: ", alert);

  const firstNameClass = firstNameHasError ? "not-valid" : "";
  const emailClass = emailHasError ? "not-valid" : "";
  const passwordClass = passwordHasError ? "not-valid" : "";

  console.log("isLoading: ", isloading);

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
                value={firstName}
                onChangeHandler={firstNameChangeHandler}
                onBlurHandler={firstNameOnBlurHandler}
                className={firstNameClass}
              />
              {firstNameHasError && (
                <p className="login-error">Please Enter valid email!</p>
              )}
              <Input
                type="email"
                placeholder="Your Email address"
                value={email}
                onChangeHandler={emailChangeHandler}
                onBlurHandler={emailOnBlurHandler}
                className={emailClass}
              />
              {emailHasError && (
                <p className="login-error">Please Enter valid first name!</p>
              )}
              <Input
                type="password"
                placeholder="Your Password"
                value={password}
                onChangeHandler={passwordChangeHandler}
                onBlurHandler={passwordOnBlurHandler}
                className={passwordClass}
              />
              {passwordHasError && (
                <p className="login-error">
                  Password should be at least 8 characters!
                </p>
              )}
              <Button type="submit" label="SIGN UP" formIsValid={formIsValid} />
              {alert.Alert === "Success" ? (
                <p>{alert.Message}</p>
              ) : (
                <>
                  <p className="login-error">{alert.Message}</p>
                </>
              )}
            </FormCard>
            {isloading && <p>Loading....</p>}
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
