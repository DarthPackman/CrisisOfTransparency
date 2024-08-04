import { useEffect, useRef } from 'react';
import './Video.css';

const Video = ({ videoPath, videoPath2, alignment }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Error trying to play the video:', error);
            });
        }
    }, []);

    return (
        <div className='VidContainer'>
            <video ref={videoRef} autoPlay className={`video ${alignment}`} muted loop>
                <source src={videoPath} type="video/webm" />
                <source src={videoPath2} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
