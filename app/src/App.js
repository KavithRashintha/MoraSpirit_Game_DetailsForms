import React, { useState } from "react";
import './App.css';
import SignUp from "./components/signUp/signUp";
import LogIn from "./components/logIn/logIn";

function App() {
    const [isSignUp, setIsSignUp] = useState(true); // Initially, display SignUp component

    const toggleComponent = () => {
        setIsSignUp(!isSignUp); // Toggle between SignUp and LogIn
    };

    return (
        <div className="App">
            {isSignUp ? (
                <div>
                    <SignUp />
                    <div className="signUpDiv">
                        <p style={{color: 'white', fontSize: '16px'}}>
                            Already registered?{" "}
                            <a href="#" onClick={toggleComponent} style={{ textDecoration: 'underline', color: 'white' }}>
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <LogIn />
                    <div className="logInDiv">
                        <p style={{ color: 'white', fontSize: '16px'}}>
                            Don't have an account?{" "}
                            <a href="#" onClick={toggleComponent} style={{ textDecoration: 'underline', color: 'white' }}>
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

const Footer = () => {
    return(
        <div className="footerOuter">
            <div className="footerInner">
                <img className="moraSpiritLogo" src="../media/moraSpiritLogo.png" alt=""/>
                <p className="moraSpiritTheme">MoraSpirit - Empowering University Sports in Sri Lanka | SLUG XlV</p>
                <p className="moraSpiritThemeMobile">MoraSpirit | SLUG XlV</p>
                <img className="slugLogo" src="../media/slugLogo.png" alt=""/>
            </div>
        </div>
    );
}


export default App;
