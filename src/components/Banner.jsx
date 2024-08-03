import './Banner.css';

const Banner = ({ img, alignment }) => {
    return (
        <div className={'BannerDisplay'}>
            <div className={`BannerContainer`}>
                <img src={img} alt="Banner" className="BannerComponent" />
            </div>
        </div>
    );
};

export default Banner;