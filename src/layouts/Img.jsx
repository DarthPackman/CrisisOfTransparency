import React from 'react';
import './Img.css';

const Img = ({ img, alignment }) => {
    return (
        <div className={`ImgContainer ${alignment}`} >
            <img src={img} alt="Image" className="ImgComponent" />
        </div>
    );
};

export default Img;
