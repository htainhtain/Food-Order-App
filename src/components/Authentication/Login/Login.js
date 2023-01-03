import React, { useContext, useReducer } from "react";

import { useNavigate } from "react-router-dom";

import loginImg from "../../../assets/img/login/login-img.png";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Login.css";
import { authContext } from "../../../context/AuthContext";

const loginReducer = (prevState, action) => {
  if (action.type === "EMAIL_INPUT_CHANGED") {
    return {
      email: action.value,
      password: prevState.password,
      emailIsValid: action.value.includes("@"),
      passwordIsValid: prevState.passwordIsValid,
      formIsValid: action.value.includes("@") && prevState.passwordIsValid,
    };
  }
  if (action.type === "PASSWORD_INPUT_CHANGED") {
    return {
      email: prevState.email,
      password: action.value,
      emailIsValid: prevState.emailIsValid,
      passwordIsValid: action.value ? true : false,
      formIsValid: prevState.emailIsValid && action.value ? true : false,
    };
  }
  if (action.type === "EMAIL_PASSWORD_CLEAR") {
    return {
      email: "",
      password: "",
      emailIsValid: true,
      passwordIsValid: true,
      formIsValid: false,
    };
  }
};

const Login = () => {
  //context
  const authCtx = useContext(authContext);
  const { loginHandler } = authCtx;

  const [loginState, loginDispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    emailIsValid: true,
    passwordIsValid: true,
    formIsValid: false,
  });

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    loginDispatch({
      type: "EMAIL_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const emailOnBlurHandler = (e) => {
    if (!loginState.emailIsValid) {
      e.currentTarget.focus();
    }
  };

  const passwordChangeHandler = (e) => {
    loginDispatch({
      type: "PASSWORD_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const passwordOnBlurHandler = (e) => {
    if (!loginState.passwordIsValid) {
      e.currentTarget.focus();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/lilies/dashboard");
    loginHandler();
    loginDispatch({
      type: "EMAIL_PASSWORD_CLEAR",
    });
  };

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
              <Input
                type="email"
                placeholder="Your Email address"
                value={loginState.email}
                onChangeHandler={emailChangeHandler}
                onBlurHandler={emailOnBlurHandler}
                className={!loginState.emailIsValid ? "not-valid" : ""}
              />
              <Input
                type="password"
                placeholder="Your Password"
                value={loginState.password}
                onChangeHandler={passwordChangeHandler}
                onBlurHandler={passwordOnBlurHandler}
                className={!loginState.passwordIsValid ? "not-valid" : ""}
              />
              <Button
                type="submit"
                label="LOGIN"
                formIsValid={loginState.formIsValid}
              />
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
