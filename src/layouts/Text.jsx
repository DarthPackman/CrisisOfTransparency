import React from 'react';
import './Text.css';

const Text = ({ text }) => {
    return (
        <div className="TextContainer">
            <h1 className="TextStyle">
                {text}
            </h1>
        </div>
    );
};

export default Text;
