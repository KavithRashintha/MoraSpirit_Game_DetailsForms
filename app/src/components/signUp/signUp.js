import './signUp.css';
import React, { type ReactElement, useState, useEffect } from 'react';
import { Animator } from '@arwes/react-animator';
import { Text } from '@arwes/react-text';

const signUp = () => {
    return(
        <div className="signUp">
            <Topic/>
            <Paragraph/>
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
                <h3 className="paragraph_content">
                    Please, Enter Your Details to Register for the Game.
                </h3>
            </Text>
        </Animator>
    );
};

export default signUp;