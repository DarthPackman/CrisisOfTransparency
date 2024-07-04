import React from 'react';
import { Player } from 'video-react';

const Video = ({ videoPath }) => {
    return (
        <video>
            <source
                src={videoPath}
                type="video/mp4"/>
        </video>
    )
};

export default Video;
