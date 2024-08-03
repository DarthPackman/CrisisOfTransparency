import { TypeAnimation } from 'react-type-animation';

const Typewriter = ({ text, text2, alignment, container, className }) => {
    const alignmentStyles = {
        centerBottom: {
            padding: '0',
            margin: '0',
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
            padding: '1rem',
            borderRadius: '1rem',
            display: 'inline-block', 
            fontFamily: 'Courier, monospace', 
            fontWeight: 'bold', 
            fontStyle: 'normal', 
            color: 'black'
        },
        default: {
            padding: '0',
            margin: '0',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        },
    };

    const selectedAlignmentStyle = alignmentStyles[alignment] || alignmentStyles.default;
    const selectedContainerStyle = containerStyles[container] || containerStyles.default;

    return (
        <div style={{ ...selectedAlignmentStyle, ...selectedContainerStyle, className }}>
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
