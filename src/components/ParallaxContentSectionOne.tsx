import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video.astro';
import Text from '../layouts/Text.astro';

interface ParallaxContentProps {
    videos: string[];
    texts: string[];
}

const ParallaxContent: React.FC<ParallaxContentProps> = ({videos, texts}) => {
    return (
        <Parallax pages={17}>
            <ParallaxLayer offset={0} speed={1} factor={1} sticky={{ start: 0, end: 3 }}>
                <Video videoPath={new URL(videos[0], import.meta.url).href}/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={1}>
                <Text text={texts[0]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} factor={1}>
                <Text text={texts[1]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1} factor={1}>
                <Text text={texts[2]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={1} factor={1} sticky={{ start: 4, end: 7 }}>
                <Video videoPath={new URL(videos[1], import.meta.url).href}/>
            </ParallaxLayer>
        </Parallax>
    );
}

export default ParallaxContent;
