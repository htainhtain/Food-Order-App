import React from "react";

import loginImg from "../../../assets/img/login/login-img.png";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Login.css";

const Login = () => {
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
          <header>
            <h3 className="login-form-title">Welcome Back!</h3>
          </header>
          <form className="login-form">
            <Input type="email" placeholder="Your Email address" />
            <Input type="password" placeholder="Your Password" />
            <Button type="submit" label="LOGIN" />
          </form>
          <div className="create-forget-action">
            <a href="/auth/signup">Create an account</a>
            <a href="/auth/forget-password">Forgot Password</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
