import React, { useState } from "react";
import "../App.css";
const SignUp = ({ closePopUpBox }) => {
  const [mode, setMode] = useState("signUp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [isFocused, setIsFocused] = useState(null);

  const focusBorder = (index) => {
    console.log("no", index);
    setIsFocused(index);
  };

  const formValid = name !== "" && email !== "" && Password !== "" && isChecked;

  const handelData = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      Password,
    };

    console.log("signup sucessfull", data);
    alert("You Have created account sucessfully");
    setName("");
    setEmail("");
    setPassword("");
    setIsChecked(!isChecked);

    closePopUpBox();
  };

  return (
    <>
      <div className="popUpCardContainer">
        <div className="popupContentBox">
          <p>{mode === "signUp" ? "Sign Up" : "LogIn"}</p>
          <p onClick={closePopUpBox}>X</p>
        </div>
        <form className="form" onSubmit={handelData}>
          <div className="inputContainer">
            <div
              onFocus={() => focusBorder(1)}
              className={`inputBox ${isFocused === 1 ? "focus" : ""}`}
            >
              <input
                type="text"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
              

              {mode === "signUp" && (
                 <div
                 onFocus={() => focusBorder(2)}
                 className={`inputBox ${isFocused === 2 ? "focus" : ""}`}
               >
                 <input
                   type="text"
                   placeholder="Email"
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
               </div>
              )}
           

            

            <div
              onFocus={() => focusBorder(mode === "signUp" ? 3 : 2)}
              className={`inputBox ${mode === "signUp" ? "focus" : ""}`}
            >
              <input
                type="text"
                placeholder="Password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           {mode === "signUp" && (
             <div className="checkBoxContainer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                required
              />
              <div className="textCheck">
              
                <p>
                  {mode === "signUp"
                    ? "I agree to Zomato's Terms of Service, Privacy Policy and Content Policies"
                    : "Don't have an account?"}
                </p>
              </div>
            </div>
           )}
            

            <div className="btnContainer">
              <button
                className={`btn-1 ${formValid ? "bgGreen" : ""}`}
                type="submit"
              >
                {mode == "signUp" ? "Create account" : "Login"}
              </button>
            </div>
          </div>
        </form>

        <div className="text-1">
          <p>
           { mode === "signUp" ? "Already have an account" : "Don't have an account?"}
           <span  onClick={()=>setMode(mode === "signUp" ? "Login" :" SignUp")}>  {mode === 'signup' ? 'Login' : 'Sign Up'} </span>
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default SignUp;
