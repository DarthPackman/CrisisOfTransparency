// src/components/InViewVideo.jsx
import React, { useRef, useEffect } from 'react';
import { useInView } from '@react-spring/web';

const InViewVideo = ({ videoPath, alignment }) => {
    const videoRef = useRef(null);
    const [ref, inView] = useInView({
        rootMargin: '0px',
        threshold: 0.5,
    });

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (inView) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
    }, [inView]);

    return (
        <div className='VidContainer' ref={ref}>
            <video className={`video ${alignment}`} muted loop ref={videoRef}>
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    );
};

export default InViewVideo;
