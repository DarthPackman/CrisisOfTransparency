import './Video.css'

const Video = ({ videoPath, alignment }) => {
    return (
        <div className='VidContainer' >
            <video autoPlay className={`video ${alignment}`} muted loop>
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    )
};

export default Video;
