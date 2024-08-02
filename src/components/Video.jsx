import './Video.css'

const Video = ({ videoPath, videoPath2, alignment }) => {
    return (
        <div className='VidContainer' >
            <video autoPlay className={`video ${alignment}`} muted loop>
                <source src={videoPath} type="video/webm" />
                <source src={videoPath2} type="video/mp4" />
            </video>
        </div>
    )
};

export default Video;
