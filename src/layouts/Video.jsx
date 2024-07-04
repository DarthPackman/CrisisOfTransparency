import React from 'react';

const Video = ({ videoPath }) => {
    return (
        <video className="video" autoPlay muted loop>
            <source src={videoPath} type="video/mp4" />
        </video>
    )
};

export default Video;
