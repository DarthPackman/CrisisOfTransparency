import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Video from '../layouts/Video';
import Text from '../layouts/Text';
import Img from '../layouts/Img';

const sectionOneVids = [
    '../vids/Vid1.mp4',
    '../vids/Vid2.mp4',
    '../vids/Vid3.mp4'
]
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
const sectionOneImgs = [
    '../slide8.png',
    '../slide12.png',
    '../slide16a.png',
    '../slide16b.png'
];

export default function ParallaxContent() {
  return (
    <div style={{ backgroundImage:'background-image: linear-gradient(#02000f,#dae0e8)', width:'100vw', height: '100vh' }}>
        <Parallax pages={20}>
            <ParallaxLayer offset={0} speed={1} factor={1} sticky={{ start: 0, end: 3 }}>
                <Video videopath={sectionOneVids[0]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} factor={1}>
                <Text text={sectionOneTexts[0]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} factor={1}>
                <Text text={sectionOneTexts[1]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1} factor={1}>
                <Text text={sectionOneTexts[2]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={1} factor={1} sticky={{ start: 4, end: 6 }}>
                <Video videopath={sectionOneVids[1]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={1} factor={1}>
                <Text text={sectionOneTexts[3]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={6} speed={1} factor={1}>
                <Text text={sectionOneTexts[4]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={7} speed={1} factor={0.5} sticky={{ start: 7, end: 8 }}>
                <Img img={sectionOneImgs[0]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={8} speed={1} factor={0.5}>
                <Text text={sectionOneTexts[5]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={9} speed={1} factor={1}>
                <Text text={sectionOneTexts[6]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={10} speed={1} factor={0.5} sticky={{ start: 10, end: 11 }}>
                <p>GRAPH</p>
            </ParallaxLayer>
            <ParallaxLayer offset={11} speed={1} factor={0.5}>
                <Text text={sectionOneTexts[7]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={12} speed={1} factor={0.5} sticky={{ start: 12, end: 13 }}>
                <p>GRAPH</p>
            </ParallaxLayer>
            <ParallaxLayer offset={13} speed={1} factor={0.5}>
                <Text text={sectionOneTexts[8]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={14} speed={1} factor={0.5} sticky={{ start: 14, end: 15 }}>
                <Img img={sectionOneImgs[1]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={15} speed={1} factor={0.5}>
                <Text text={sectionOneTexts[9]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={16} speed={1} factor={1} sticky={{ start: 16, end: 18 }}>
                <Video videopath={sectionOneVids[2]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={17} speed={1} factor={1}>
                <Text text={sectionOneTexts[9]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={18} speed={1} factor={1}>
                <Text text={sectionOneTexts[10]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={19} speed={1} factor={1} sticky={{ start: 19, end: 20 }}>
                <Img img={sectionOneImgs[2]}/>
                <Img img={sectionOneImgs[3]}/>
            </ParallaxLayer>
            <ParallaxLayer offset={20} speed={1} factor={1}>
                <Text text={sectionOneTexts[11]}/>
            </ParallaxLayer>
        </Parallax>
    </div>
  );
}