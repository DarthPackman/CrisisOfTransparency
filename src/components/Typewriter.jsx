import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = ({text, text2}) => {
    return (
        <TypeAnimation
            sequence={[
                text,
                10000,
                text2,
                1000
            ]}
            speed={30}
            deletionSpeed={40}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
        
        
    );
};

export default Typewriter;

