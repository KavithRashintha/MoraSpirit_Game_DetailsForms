import './signUp.css';
import React, { type ReactElement, useState, useEffect } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';


const signUp = () => {
    return(
        <div className="signUp">
            <Topic/>
            <Paragraph/>
            <SignupForm/>
        </div>
    );
}

const Topic = (): ReactElement => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const tid = setInterval(() => setActive(active => !active), 2000);
        return () => clearInterval(tid);
    }, []);

    return (
        <Animator active={active} duration={{ enter: 1.5, exit: 3.5 }}>
            <Text
                style={{ color: 'black', fontFamily: 'monospace' }}
                manager='decipher'
                easing='outSine'
                fixed
            >
                <h1 className="instructionTopic">Welcome !</h1>
            </Text>
        </Animator>
    );
};

const Paragraph = (): ReactElement => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setActive(!active), 4000);
        return () => clearTimeout(timeout);
    }, [active]);

    return (
        <Animator active={active} duration={{ enter: 3.5, exit: 1 }}>
            <Text style={{ color: '#ddd' }} fixed>
                <h3 className="paragraphContent">
                    Please, Enter Your Details to Register for the Game.
                </h3>
            </Text>
        </Animator>
    );
};

const SignupForm = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <div className="label">
                        <label htmlFor="username">Username :</label>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
                </div>

                <div className="form-group">
                    <div className="label">
                        <label htmlFor="email">Email :</label>
                    </div>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>

                <div className="form-group">
                    <div className="label">
                        <label htmlFor="password">Password :</label>
                    </div>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                </div>

                <div className="form-group">
                    <div className="label">
                        <label htmlFor="university">University :</label>
                    </div>
                    <input type="text" className="form-control" id="university" placeholder="Enter your university"/>
                </div>

                <div className="form-group">
                    <div className="label">
                        <label htmlFor="whatsapp">WhatsApp :</label>
                    </div>
                    <input type="text" className="form-control" id="whatsapp" placeholder="Enter your WhatsApp number"/>
                </div>

                <button type="submit" className="btn btn-info signUpBtn">
                    Sign Up
                </button>
            </form>
        </div>
    );
};




export default signUp;