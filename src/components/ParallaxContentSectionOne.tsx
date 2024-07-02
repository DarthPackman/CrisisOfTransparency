import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video.astro';

interface ParallaxContentProps {
    videos: string[];
}

const ParallaxContent: React.FC<ParallaxContentProps> = ({ videos}) => {
    return (
        <Parallax pages={17}>
            <ParallaxLayer offset={0} speed={0.5} factor={1}>
                <Video videoPath={new URL(videos[0], import.meta.url).href}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.8} factor={1}>
                <Video videoPath={new URL(videos[1], import.meta.url).href} />
            </ParallaxLayer>
        </Parallax>
    );
}

export default ParallaxContent;
