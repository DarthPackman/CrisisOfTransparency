import './Text.css';
import React from 'react';

const GroupText = ({ text, background, alignment, type }) => {
    const isArray = Array.isArray(text);
    return (
        <div className={'TextDisplay'}>
            <div className={`TextContainer ${background} ${alignment} ${type}`}>
                <h1 className={`TextStyle`}>
                    {isArray ? (
                        text.map((line, index) => (
                            <React.Fragment key={index}>
                                <span className={index === 0 ? 'Bold' : 'Normal'}>
                                    {line}
                                </span>
                                <br />
                            </React.Fragment>
                        ))
                    ) : (
                        text
                    )}
                </h1>
            </div>
        </div>
    );
};

export default GroupText;
