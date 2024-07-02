import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video.astro';
import Text from '../layouts/Text.astro';
import Img from '../layouts/Img.astro'

interface ParallaxContentProps {
    videos: string[];
    texts: string[];
    imgs: string[];
}

const ParallaxContent: React.FC<ParallaxContentProps> = ({videos, texts, imgs}) => {
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
            <ParallaxLayer offset={4} speed={1} factor={1} sticky={{ start: 4, end: 6 }}>
                <Video videoPath={new URL(videos[1], import.meta.url).href}/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={1} factor={1}>
                <Text text={texts[3]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={1} factor={1}>
                <Text text={texts[4]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={7} speed={1} factor={0.5} sticky={{ start: 7, end: 8 }}>
                <Img img={imgs[0]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={8} speed={1} factor={0.5}>
                <Text text={texts[5]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={9} speed={1} factor={1}>
                <Text text={texts[6]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={10} speed={1} factor={0.5} sticky={{ start: 10, end: 11 }}>
                <p>GRAPH</p>
            </ParallaxLayer>
            <ParallaxLayer offset={11} speed={1} factor={0.5}>
                <Text text={texts[7]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={12} speed={1} factor={0.5} sticky={{ start: 12, end: 13 }}>
                <p>GRAPH</p>
            </ParallaxLayer>
            <ParallaxLayer offset={13} speed={1} factor={0.5}>
                <Text text={texts[8]}/>
            </ParallaxLayer>
        </Parallax>
    );
}

export default ParallaxContent;
