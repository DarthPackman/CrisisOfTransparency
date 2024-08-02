import { TypeAnimation } from 'react-type-animation';

const Typewriter = ({ text, text2, alignment, container }) => {
    const alignmentStyles = {
        centerBottom: {
            padding: '1vh',
            position: 'absolute',
            left: '50%',
            bottom: '5%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
        },
        default: {
        },
    };

    const containerStyles = {
        oldTimey: {
            backgroundColor: 'white',
            border: '2px solid black',
            padding: '1vh',
            borderRadius: '8px',
            display: 'inline-block', 
            fontFamily: 'Courier, monospace', 
            fontWeight: 'bold', 
            fontStyle: 'normal', 
            fontsize: '3vh',
            color: 'black'
        },
        default: {
            fontSize: '4vh',
            color: 'white',
        },
    };

    const selectedAlignmentStyle = alignmentStyles[alignment] || alignmentStyles.default;
    const selectedContainerStyle = containerStyles[container] || containerStyles.default;

    return (
        <div style={{ ...selectedAlignmentStyle, ...selectedContainerStyle }}>
            <TypeAnimation
                sequence={[
                    text,
                    10000,
                    text2,
                    1000,
                ]}
                speed={50}
                deletionSpeed={100}
                style={{ fontSize: 'inherit', color: 'inherit' }} 
                repeat={Infinity}
            />
        </div>
    );
};

export default Typewriter;
