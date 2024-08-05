import './Img.css';

const Img = ({ img, alignment }) => {
    return (
        <div className={`ImgContainer`}>
                <img src={img} className={`img ${alignment}`}/>
        </div>
    );
};

export default Img;