import React from "react";
import OtpInput from "react-otp-input";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "./firebase.js";

const Verification = ({verify, setVerify}) =>{

    const [ph, setPh] = useState(''); 
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false); 
    const renderInput = (inputProps) => (
        <input {...inputProps} className="otp-input-class" />
    );

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => {},
            },
            auth
          );
        }
    }

    function onSignup() {
        onCaptchVerify();
    
        const appVerifier = window.recaptchaVerifier;
    
        const formatPh = "+" + ph;
    
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setShowOtp(true);
          })
          .catch((error) => {
            console.log(error);
          });
        
    }

    function onOTPVerify() {
        window.confirmationResult
          .confirm(otp)
          .then(async (res) => {
            console.log("otp verified"+res);
            setVerify(true);
          })
          .catch((err) => {
            console.log(err);
            document.getElementById("msg").innerHTML = "Invalid OTP. Please try again.";
          });
      }


    return(
        <div className="main-container">
          <p className="verify-info">Please verify your phone number to continue to the chatbot.</p>
            <div id="recaptcha-container"></div>
            <PhoneInput country = {"in"} value = {ph} onChange = {setPh} disabled = {false} autofocus></PhoneInput>
            {
                showOtp ? 
                <>
                <p className="verify-info">Enter the OTP sent to your phone number</p>
                <OtpInput numInputs={6} value = {otp} onChange = {setOtp} renderInput = {renderInput} otpType = "number"   disabled = {false} autofocus/>
                <button className="verify-btn" onClick={onOTPVerify}>Verify</button>
                </> : 
                <button className="verify-btn" onClick={onSignup}>Send OTP</button>
            }
            <p id="msg" className="verify-info"></p>
        </div>
    )
}


export default Verification