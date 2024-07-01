import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                'We produce food for Mice',
                1000,
                '',
                1000
                // 'We produce food for Hamsters',
                // 1000,
                // 'We produce food for Guinea Pigs',
                // 1000,
                // 'We produce food for Chinchillas',
                // 1000,
            ]}
            speed={50}
            deletionSpeed={90}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
        
        
    );
};

export default Typewriter;

