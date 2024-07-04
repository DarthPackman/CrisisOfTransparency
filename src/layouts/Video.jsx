import React from 'react';
import './Video.css';

const Video = ({ videoPath }) => {
    return (
        <video className="video" autoPlay muted loop>
            <source src={videoPath} type="video/mp4" />
        </video>
    );
};

export default Video;
