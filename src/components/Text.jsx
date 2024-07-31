import './Text.css';

const Text = ({ text, background, alignment, type }) => {
    return (
        <div className={'TextDisplay'}>
            <div className={`TextContainer ${background} ${alignment}`}>
                <h1 className={`TextStyle ${type}`}>
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default Text;
