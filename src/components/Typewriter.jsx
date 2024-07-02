import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
        <TypeAnimation
            sequence={[
                'We produce food for Mice',
                1000,
                '',
                1000
            ]}
            speed={50}
            deletionSpeed={90}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
        
        
    );
};

export default Typewriter;
