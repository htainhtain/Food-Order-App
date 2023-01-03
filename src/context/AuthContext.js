import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext({
  isAuthenticated: "",
  loginHandler: () => {},
  logOutHandler: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticatd] = useState(false);

  const logOutHandler = () => {
    setIsAuthenticatd(false);
    localStorage.setItem("isAuthenticated", false);
  };

  const loginHandler = () => {
    setIsAuthenticatd(true);
    localStorage.setItem("isAuthenticated", true);
  };

  useEffect(() => {
    const isAuthenticatedStorage = JSON.parse(
      localStorage.getItem("isAuthenticated")
    );
    if (isAuthenticatedStorage) {
      setIsAuthenticatd(isAuthenticatedStorage);
    }
  }, []);

  

  return (
    <authContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        loginHandler: loginHandler,
        logOutHandler: logOutHandler,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
