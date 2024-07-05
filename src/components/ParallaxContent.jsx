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
    '/sectionOne/slide16b.png',
    '/sectionOne/slide10.png',
    '/sectionOne/slide11.png'
];

const bannerOneImgs = [
    '/bannerOne/HOCHill-Layer1.png',
    '/bannerOne/HOCHill-Layer2.png',
    '/bannerOne/HOCHill-Layer3.png',
    '/bannerOne/HOCHill-Layer4.png',
    '/bannerOne/HOCHill-Layer5.png'
];

const bannerOneTexts = [
    'Crisis of Transparency',
    'A Report on The Dire State of Canada’s Access to Information System',
    'How did we arrive at this juncture? The answer partly rests in how the system was created...'
]

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video';
import Text from '../layouts/Text';
import Img from '../layouts/Img';

export default function ParallaxContent() {
return (
    <Parallax pages={100}>
        {/* SECTION ONE */}
        <ParallaxLayer 
            offset={0} 
            factor={34} 
            speed={0}
            style={{backgroundImage: 'linear-gradient(#02000f,#dae0e8)'}}
        />
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
        
        <ParallaxLayer sticky={{ start: 7, end: 11 }}>
            <Video videoPath={sectionOneVids[1]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 8, end: 9 }}>
            <Text text={sectionOneTexts[3]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 10, end: 11 }}>
            <Text text={sectionOneTexts[4]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 12, end: 14 }}> 
            <Img img={sectionOneImgs[0]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 13, end: 14 }}>
            <Text text={sectionOneTexts[5]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 15, end: 16 }}>
            <Text text={sectionOneTexts[6]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 17, end: 19 }}>
            <Img img={sectionOneImgs[4]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 18, end: 19 }}>
            <Text text={sectionOneTexts[7]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 20, end: 22 }}>
            <Img img={sectionOneImgs[5]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 21, end: 22 }}>
            <Text text={sectionOneTexts[8]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 23, end: 25 }}>
            <Img img={sectionOneImgs[1]} alignment='ImgCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 24, end: 25 }} >
            <Text text={sectionOneTexts[9]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer  sticky={{ start: 26, end: 30 }}>
            <Video videoPath={sectionOneVids[2]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 27, end: 28 }}>
            <Text text={sectionOneTexts[10]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 29, end: 30 }}>
            <Text text={sectionOneTexts[11]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 31, end: 33 }}>
            <Img img={sectionOneImgs[2]} alignment='ImgCenterTop'/>
            <Img img={sectionOneImgs[3]} alignment='ImgCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 32, end: 33 }}>
            <Text text={sectionOneTexts[12]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>

        {/* BANNER ONE */}
        <ParallaxLayer 
            offset={34} 
            factor={0.5} 
            speed={0}
            style={{backgroundImage: 'linear-gradient(#dae0e8,#dae0e8)'}}
        />
        <ParallaxLayer 
            offset={34.25} 
            factor={1} 
            speed={0}
            style={{backgroundImage: 'linear-gradient(#d8e1ef,#d8e1ef)'}}
        />
        <ParallaxLayer offset={34.5} speed={0.30}>
            <Img img={bannerOneImgs[1]} alignment='ImgCenter'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34.5} speed={0.4}>
            <Img img={bannerOneImgs[2]} alignment='ImgCenter'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34} speed={0.05}>
            <Img img={bannerOneImgs[3]} alignment='ImgHardTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34.65} speed={0.5}>
            <Img img={bannerOneImgs[4]} alignment='ImgCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34} speed={0.5}>
            <Text text={bannerOneTexts[0]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34} speed={0.5}>
            <Text text={bannerOneTexts[1]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34.5} speed={0.5}>
            <Text text={bannerOneTexts[2]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        {/* SECTION TWO */}
        <ParallaxLayer 
            offset={35} 
            factor={35} 
            speed={0}
            style={{backgroundImage: 'linear-gradient(#0a0149,#DDDCE2)'}}
        />

    </Parallax>
);}