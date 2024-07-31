import React, { useState, useEffect, useRef } from 'react';

function FadeInSection(props) {
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
            { threshold: 1.0 } // Adjust this threshold as needed
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
    }, []);

    const fadeStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
    };

    return (
        <div
            ref={sectionRef}
            style={fadeStyle}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;
