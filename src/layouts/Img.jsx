import React from 'react';
import './Img.css';

const Img = ({ img }) => {
    return (
        <img src={img} alt="Image" className="ImgComponent" />
    );
};

export default Img;
