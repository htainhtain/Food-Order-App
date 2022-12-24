import React from "react";

import signupImg from "../../../assets/img/signup/signup-img.png";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Signup.css";

const Signup = () => {
  return (
    <section id="signup-container">
      <div className="signup">
        <figure className="signup-img-container">
          <div className="filter"></div>
          <img src={signupImg} alt="Honey toast bread" className="signup-img" />
        </figure>
        <div className="signup-form-container">
          <header>
            <h3 className="signup-form-title">Welcome to Lilies!</h3>
          </header>
          <form className="signup-form">
            <Input type="text" placeholder="Your First Name" />
            <Input type="email" placeholder="Your Email address" />
            <Input type="password" placeholder="Your Password" />
            <Button type="submit" label="SIGN UP" />
          </form>
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
    </section>
  );
};

export default Signup;
