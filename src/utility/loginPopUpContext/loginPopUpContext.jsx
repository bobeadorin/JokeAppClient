/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const LoginPopupContext = createContext();

export function LoginPopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <LoginPopupContext.Provider value={{ showPopup, setShowPopup }}>
      {children}
    </LoginPopupContext.Provider>
  );
}
