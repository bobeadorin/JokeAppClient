// import { useState, useContext } from "react";
// import { LoginPopupContext } from "../../utility/loginPopUpContext/loginPopUpContext";
import "./LoginPopupStyles.css";
import { useNavigate } from "react-router-dom";

export default function LoginPopup() {
  const navigate = useNavigate();

  return (
    <div className={"popup-closed"}>
      <p className="popup-closeBtn">x</p>
      <h1 className="error-text">
        You need to login in order to perform this action
      </h1>
      <div className="btnContainer-popup">
        <button onClick={() => navigate("/login")}>login</button>
        <button onClick={() => navigate("/register")}>register</button>
      </div>
    </div>
  );
}

//  "popup-container"
