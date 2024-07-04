import React from 'react';
import './Text.css';

const Text = ({ text, background, alignment }) => {
    return (
        <div className={`TextContainer ${background} ${alignment}`} >
            <h1 className="TextStyle">
                {text}
            </h1>
        </div>
    );
};

export default Text;
