import './Text.css';

const Text = ({ background, alignment, type, link1, link2, link3 }) => {
    return (
        <div className={'TextDisplay'}>
            <div className={`TextContainer ${background} ${alignment}`}>
                <h1 className={`TextStyle ${type}`}>
                    Portfolios
                    <p>
                        <a href={`${link1}`} target={'_blank'} rel={'noopener noreferrer'}> Gavin</a> <a href={`${link2}`} target={'_blank'} rel={'noopener noreferrer'}> Carlos</a> <a href={`${link3}`} target={'_blank'} rel={'noopener noreferrer'}> Ian</a>
                    </p>
                </h1>
            </div>
        </div>
    );
};

export default Text;
