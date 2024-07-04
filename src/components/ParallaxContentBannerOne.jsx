import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Img from '../layouts/Img';

const bannerOneImgs = [
    '/bannerOne/HOCHill-Layer1.png',
    '/bannerOne/HOCHill-Layer2.png',
    '/bannerOne/HOCHill-Layer3.png',
    '/bannerOne/HOCHill-Layer4.png',
    '/bannerOne/HOCHill-Layer5.png'
];

export default function ParallaxContent() {
  return (
    <Parallax pages={2}>
        <ParallaxLayer offset={33} speed={0.5}>
            <Img img={bannerOneImgs[0]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={33} speed={0.5}>
            <Img img={bannerOneImgs[1]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={33} speed={0.5}>
            <Img img={bannerOneImgs[2]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={33} speed={0.5}>
            <Img img={bannerOneImgs[3]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={33} speed={0.5}>
            <Img img={bannerOneImgs[4]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
    </Parallax>
  );
}