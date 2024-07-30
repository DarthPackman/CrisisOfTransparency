import { TypeAnimation } from 'react-type-animation';

const Typewriter = ({ text, text2, alignment, container }) => {
    const alignmentStyles = {
        centerBottom: {
            position: 'absolute',
            left: '50%',
            bottom: '15%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            fontSize: '2em',
            color: 'black',
        },
        default: {
            fontSize: '2em',
            color: 'black',
        },
    };

    const containerStyles = {
        oldTimey: {
            backgroundColor: 'white',
            border: '2px solid black',
            padding: '1em',
            borderRadius: '8px',
            display: 'inline-block', 
            fontFamily: 'Courier, monospace', 
            fontWeight: 'bold', 
            fontStyle: 'normal', 
        },
        default: {
            // No visible container styles
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
