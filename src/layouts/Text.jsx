import React from 'react';
import './Text.css';

const Text = ({ text, background, alignment, type }) => {
    return (
        <div className={'TextDisplay'}>
            <div className={`TextContainer ${background} ${alignment} ${type}`} >
                <h1 className={`TextStyle`}>
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default Text;
