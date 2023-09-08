import './logIn.css';
import React, { type ReactElement, useState, useEffect } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';



const logIn = () => {
    return(
        <div className="signUp">
            <LogInTopic/>
            <LogInParagraph/>
            <LogInForm/>
        </div>
    );
}

const LogInTopic = (): ReactElement => {
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
                <h1 className="logInnstructionTopic">Welcome !</h1>
            </Text>
        </Animator>
    );
};

const LogInParagraph = (): ReactElement => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setActive(!active), 4000);
        return () => clearTimeout(timeout);
    }, [active]);

    return (
        <Animator active={active} duration={{ enter: 3.5, exit: 1 }}>
            <Text style={{ color: '#ddd' }} fixed>
                <p className="logInParagraphContent">
                    Please, Enter Your User Credentials to log in to the Game.
                </p>
            </Text>
        </Animator>
    );
};

const LogInForm = () => {
    return (
        <div className="logInOuterContainer">
            <div className="logInContainer">
                <form>
                    <div className="form-group">
                        <div className="label">
                            <label htmlFor="username">Username :</label>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                    </div>

                    <div className="form-group">
                        <div className="label">
                            <label htmlFor="whatsapp">WhatsApp :</label>
                        </div>
                        <input type="text" className="form-control" id="whatsapp" placeholder="WhatsApp number"/>
                    </div>

                    <div className="buttonContainer">
                        <button type="submit" className="btn btn-danger logInBtn">Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
};





export default logIn;