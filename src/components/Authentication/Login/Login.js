import React, { useContext, useState } from "react";
import { authContext } from "../../../context/AuthContext";
import useInput from "../../../hooks/useInput";
// import { useNavigate } from "react-router-dom";

import loginImg from "../../../assets/img/login/login-img.png";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Login.css";


const emailValidate = (value) => {
  return value.includes("@");
};

const passwordValidate = (value) => {
  return value.length > 0;
}

const Login = () => {
  //context
  const authCtx = useContext(authContext);
  const { loginHandler } = authCtx;

  const {
    input: email,
    inputIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputOnBlur: emailOnBlurHandler,
    inputHasError: emailHasError
  } = useInput(emailValidate);

  const {
    input: password,
    inputIsValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputOnBlur: passwordOnBlurHandler,
    inputHasError: passwordHasError
  } = useInput(passwordValidate);

  const formIsValid = emailIsValid && passwordIsValid;
  const [loginError, setLoginError] = useState("");

  const LoginErrorHandler = (error) => {
    console.log("error: ", error);
    setLoginError(error);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(email, password, LoginErrorHandler);
    // navigate("/lilies/dashboard");
  };

  const emailClass = emailHasError ? "not-valid" : "";
  const passwordClass = passwordHasError ? "not-valid" : "";

  return (
    <section id="login-container">
      <div className="login">
        <figure className="login-img-container">
          <div className="filter"></div>
          <img
            src={loginImg}
            alt="Two people cooking delicious meal"
            className="login-img"
          />
        </figure>
        <div className="login-form-container">
          <div className="login-form">
            <header>
              <h3 className="login-form-title">Welcome Back!</h3>
            </header>
            <FormCard submitHandler={submitHandler}>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email address"
                  value={email}
                  onChangeHandler={emailChangeHandler}
                  onBlurHandler={emailOnBlurHandler}
                  className={emailClass}
                />
                {emailHasError && (
                  <p className="login-error">Please Enter valid email!</p>
                )}
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChangeHandler={passwordChangeHandler}
                  onBlurHandler={passwordOnBlurHandler}
                  className={passwordClass}
                />
                {passwordHasError && (
                  <p className="login-error">Password cannot be empty!</p>
                )}
              </div>

              <Button type="submit" label="LOGIN" formIsValid={formIsValid} />
              {loginError !== "" && (
                <p className="login-error">{loginError}</p>
              ) }
            </FormCard>
            <div className="create-forget-action">
              <a href="/auth/signup">Create an account</a>
              <a href="/auth/forget-password">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
