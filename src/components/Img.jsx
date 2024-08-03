import './Img.css';

const Img = ({ img, alignment }) => {
    return (
        <div className={`ImgContainer ${alignment}`} >
            <img src="small.jpg" srcset="small.jpg 600w, medium.jpg 1200w, large.jpg 1800w" alt="Responsive image"/>
        </div>
    );
};

export default Img;
