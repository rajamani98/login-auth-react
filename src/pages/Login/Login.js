import './LoginUi.css';
import { Button } from 'react-bootstrap';
import profile from "./../../image/a.png";
import email from "./../../image/email.jpg";
import pass from "./../../image/pass.png";
import React from "react";
import { useState } from 'react';
import { environment } from 'react-router-component';

function Login() {
    const [emailId, setEmailId] = useState("")
    const [otp, setOtp] = useState("")
    async function getOtp() {
        let item = { emailId }
        console.warn(item)
        let result = await fetch("https://loginform-authentication.herokuapp.com/api/v1/login", {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        })
        localStorage.setItem("user-info", JSON.stringify(item))
        alert("OTP SENT");
    }
    async function verify() {
        console.log("verifying...");
        let item = { otp }
        console.warn(item)
        let result = await fetch("https://loginform-authentication.herokuapp.com/api/v1/verify", {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        console.log(result);
        console.log("result :");
        console.log(result);
        if (result.status == 200) {
            environment.defaultEnvironment.navigate("/home");
        } else {
            environment.defaultEnvironment.navigate("/login");
        }
        localStorage.setItem("user-info", JSON.stringify(item))
    }
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>
                        <h1>Login User</h1>
                        <div>
                            <img src={email} alt="email" className="email" />
                            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)}
                                placeholder="Enter Email-ID" className="name" />
                        </div>
                        <div className="login-button">
                            <Button type="button" variant="dark"
                                className="mx-2" onClick={getOtp}>Get OTP</Button>
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email" />
                            <input type="number" value={otp} onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP" className="name" />
                        </div>
                        <div className="login-button">
                            <Button type="button" variant="dark"
                                className="mx-2" onClick={verify}>Verify</Button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Login;
