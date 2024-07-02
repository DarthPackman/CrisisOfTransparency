import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
        <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
            sequence={[
                `Line one\nLine Two\nLine Three\nLine Four\nLine Five \nLine Seven`, 
                1000,
                'Line one\nLine Three\nLine Four \nLine Seven',
            ]}
            repeat={Infinity}
        />
    );
};

export default Typewriter;

