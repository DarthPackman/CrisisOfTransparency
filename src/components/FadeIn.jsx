import React, { useState, useEffect, useRef } from 'react';

function FadeInSection(props) {
    const { threshold = 1.0, children } = props; // Default threshold to 1.0 if not provided
    const [isVisible, setVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);  // Only set to true, don't set back to false
                    }
                });
            },
            { threshold: threshold } // Use the threshold prop
        );

        const currentElement = sectionRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    const fadeStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
    };

    return (
        <div
            ref={sectionRef}
            style={fadeStyle}
        >
            {children}
        </div>
    );
}

export default FadeInSection;
