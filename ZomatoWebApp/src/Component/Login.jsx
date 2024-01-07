import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = ({ closePopUpBox }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(null);

  const userName = localStorage.getItem("userName");
  const password = localStorage.getItem("password");

  console.log("detail", userName, "-", password);

  const focusBorder = (index) => {
    console.log("no", index);
    setIsFocused(index);
  };

  const handelData = (e) => {
    e.preventDefault();
    toast.success("This is a success toast!");
   
    if (name === userName && Password === password) {
      console.log("bhhds", toast.success("This is a success toast!"));

      setTimeout(() => {
        navigate("/cusine");
      }, 5000);
    } else {
      alert("First signup your detail");
    }

    // console.log("signup sucessfull", data);

    setName("");

    setPassword("");

    closePopUpBox();
  };

  const formValid = name !== "" && Password !== "";
  return (
    <div className="popUpCardContainer">
      <div className="popupContentBox">
        <p>LogIn</p>
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

          <div
            onFocus={() => focusBorder(3)}
            className={`inputBox ${isFocused === 3 ? "focus" : ""}`}
          >
            <input
              type="text"
              placeholder="Password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btnContainer">
            <button
              className={`btn-1 ${formValid ? "bgGreen" : ""}`}
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
