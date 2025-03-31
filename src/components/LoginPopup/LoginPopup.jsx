import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, SetCurrState] = useState("Login");
  const [hideInputs, SetHideInputs] = useState(false); // State to control input field visibility

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent form submission
    SetHideInputs(true); // Hide the input fields
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
          {!hideInputs && ( // Conditionally render inputs based on hideInputs state
            <>
              {currState === "Sign Up" && (
                <input type="text" placeholder="Your name" required />
              )}
              <input type="email" placeholder="Your email Address" required />
              <input type="password" placeholder="Your password" required />
            </>
          )}
        </div>
        <button onClick={handleButtonClick}>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
         <div className="login-popup-condition">
            <input type="checkbox" required />
             <p>By continuing, i agree to the terms of use & policy.</p>
         </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>SetCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>SetCurrState("Login")}>Login here</span></p>
            }
           
         
      </form>
    </div>
  );
};

export default LoginPopup;
