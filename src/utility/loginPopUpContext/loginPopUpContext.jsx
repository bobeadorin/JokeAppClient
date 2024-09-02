/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const LoginPopupContext = createContext();

export function LoginPopupProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <LoginPopupContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </LoginPopupContext.Provider>
  );
}
