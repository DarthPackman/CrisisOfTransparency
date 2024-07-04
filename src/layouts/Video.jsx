import React from 'react';
import './Video.css'

const Video = ({ videoPath, alignment }) => {
    return (
        <div className={`VidContainer ${alignment}`} >
            <video className="video" autoPlay muted loop>
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    )
};

export default Video;
