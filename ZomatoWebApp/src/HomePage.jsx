import React, { useState } from "react";
import "../src/App.css";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";

const HomePage = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const [openLogIn, setOpenLogIn] = useState(false);

  const signUpBox = () => {
    console.log("openSignUp state:", openSignUp);
    setOpenSignUp(!openSignUp);
  };

  const closeSignUpBox = () => {
    setOpenSignUp(false);
    setOpenLogIn(false)
  };
  const logInBox = () => {
    setOpenLogIn(!openLogIn);
    setOpenSignUp(false);
  };
  return (
    <>
      <div className="containerrr">
        <div className="containerWrappppp">
          <div className="topBox">
            <div className="loginBox">
              <div className="signUpTxt" onClick={signUpBox}>
                <span>SignUp</span>
              </div>
              <div className="signUpTxt" onClick={logInBox}>
                <span>LogIn</span>
              </div>
            </div>
          </div>

          <div className="textContainer">
            <div className="headerText">
              <h1>ZOMATO</h1>
            </div>
            <div className="paraText">
              <p>Find the best restaurants, cafés and bars in India</p>
            </div>
          </div>
        </div>
        {openSignUp && (
          <>
            <SignUp closePopUpBox={closeSignUpBox} />
          </>
        )}

        {openLogIn && (
          <>
            <Login closePopUpBox={closeSignUpBox} />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
