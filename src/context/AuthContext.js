import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const authContext = createContext({
  isAuthenticated: false,
  signUpHandler: () => {},
  loginHandler: () => {},
  logOutHandler: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticatd] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const logOutHandler = () => {
    setIsAuthenticatd(false);
    removeCookie("token", { path: "/" });
    console.log("i have logged out.");
  };

  const loginHandler = (email, password, errorHandler) => {
    axios
      .post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.Data.token;
        setCookie("token", token, { path: "/" });
        setIsAuthenticatd(true);
      })
      .catch((err) => {
        errorHandler(err.response.data.data.data);
      });
  };

  const signUpHandler = (
    username,
    email,
    password,
    resetForm,
    signUpAlertHandler,
    formIsSubmitting,
    formIsSubmitted
  ) => {
    formIsSubmitting();
    axios
      .post("http://localhost:8000/auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        signUpAlertHandler({
          Alert: "Success",
          Message: "Successfully registered. You can login now"
        });
        resetForm();
      })
      .catch((err) => {
        signUpAlertHandler({
          Alert: "Error",
          Message: err
        });
      });
    formIsSubmitted();
  };

  useEffect(() => {
    if (cookies.token) {
      setIsAuthenticatd(true);
    }
  }, [cookies.token]);

  return (
    <authContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        signUpHandler: signUpHandler,
        loginHandler: loginHandler,
        logOutHandler: logOutHandler,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
