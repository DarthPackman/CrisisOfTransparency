import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video';
import Text from '../layouts/Text';
import Img from '../layouts/Img';

const sectionOneTexts = [
    'This week is “Right to Know” Week in Canada and around the world.',
    'Access to information is a cornerstone of Canadian democracy, keeping governments accountable, encouraging citizen participation, and giving Canadians access to the information their taxes pay for.',
    'But the current system is in disarray.',
    'In May 2023, the Information Commissioner, the independent ombudsman for the system, appeared before Parliament…',
    '… to criticize the current system and a system that deliberately underfunded her office’s capacity to process complaints by access to information requesters.',
    'The following year, her budget was cut further.',
    'Today, the system is in sharp decline.',
    'Delays are endemic.',
    'Funding is low.',
    'Real costs are not being met.',
    'A systemic breakdown in the availability of vital government information tears at accountability frameworks, accelerating a decline in Canadian trust in government institutions.',
    'And the faltering system has wrought havoc on Canadian journalism, contributing to distrust and a plague of misinformation and disinformation fueled by the government itself.',
    'How did this happen?'
];
const sectionOneVids = [
    '/vids/Vid1.mp4',
    '/vids/Vid2.mp4',
    '/vids/Vid3.mp4'
]
const sectionOneImgs = [
    '/sectionOne/slide8.png',
    '/sectionOne/slide12.png',
    '/sectionOne/slide16a.png',
    '/sectionOne/slide16b.png'
];
export default function ParallaxContent() {
  return (
    <Parallax pages={33} innerStyle={{backgroundImage: 'linear-gradient(#02000f,#dae0e8)'}}>
        <ParallaxLayer sticky={{ start: 0, end: 6 }}>
            <Video videoPath={sectionOneVids[0]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 2 }}>
            <Text text={sectionOneTexts[0]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 4 }}>
            <Text text={sectionOneTexts[1]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 5, end: 6 }}>
            <Text text={sectionOneTexts[2]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        
        <ParallaxLayer sticky={{ start: 7.25, end: 11 }}>
            <Video videoPath={sectionOneVids[1]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 8, end: 9 }}>
            <Text text={sectionOneTexts[3]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 10, end: 11 }}>
            <Text text={sectionOneTexts[4]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 12.25, end: 14 }}> 
            <Img img={sectionOneImgs[0]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 13, end: 14 }}>
            <Text text={sectionOneTexts[5]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 15, end: 16 }}>
            <Text text={sectionOneTexts[6]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 17.25, end: 19 }}>
            <p>GRAPH</p>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 18, end: 19 }}>
            <Text text={sectionOneTexts[7]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 20.25, end: 22 }}>
            <p>GRAPH</p>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 21, end: 22 }}>
            <Text text={sectionOneTexts[8]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 23.25, end: 25 }}>
            <Img img={sectionOneImgs[1]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 24, end: 25 }} >
            <Text text={sectionOneTexts[9]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer  sticky={{ start: 26.25, end: 30 }}>
            <Video videoPath={sectionOneVids[2]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 27, end: 28 }}>
            <Text text={sectionOneTexts[10]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 29, end: 30 }}>
            <Text text={sectionOneTexts[11]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 31.25, end: 33 }}>
            <Img img={sectionOneImgs[2]} alignment='ImgCenterTop'/>
            <Img img={sectionOneImgs[3]} alignment='ImgCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 32, end: 33 }}>
            <Text text={sectionOneTexts[12]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>
    </Parallax>
  );
}