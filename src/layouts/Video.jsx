import './Video.css'

const Video = ({ videoPath, alignment }) => {
    return (
        <div className='VidContainer' >
            <video className={`video ${alignment}`} autoPlay muted loop>
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    )
};

export default Video;
