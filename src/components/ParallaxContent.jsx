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

const sectionTwoTexts = [
    'Starting in the second half of the 20th Century, many countries started passing freedom of information laws.',
    'Finland 1951',
    'United States 1966',
    'Denmark and Norway 1970',
    'France 1971',
    'In Canada, the provinces began to do so, too.',
    'Nova Scotia 1977',
    'New Brunswick 1977',
    'Newfoundland and Labrador in 1981',
    'Quebec in 1982',
    'Next, it was the federal government’s turn…',
    'In 1965, NDP MP Barry Mather introduced the first private member’s bill to pass a Canadian freedom of information law.  It failed.',
    'In 1971, Progressive Conservative MP Ged Baldwin introduced the first comprehensive legislation in a private member’s bill.',
    'It also failed.',
    'Despite continued attempts throughout the 1970s to pass a law, there was no success.  But Baldwin continued in his efforts to champion the need for a law.',
    'A promising bill was introduced in the short-lived government of Joe Clark, but died before the government fell on a confidence motion.',
    'Finally, under the Trudeau government’s law mandate, Secretary of State and Minister of Communications Francis Fox introduced a bill in the House of Commons.',
    'Although the bill eventually passed, it did not look promising at first.  After its introduction, the bill languished in committee.',
    'The bill initially made it possible for the Information Commissioner and the courts to review exemptions for cabinet confidences. At the last minute, Prime Minister Trudeau made a last minute amendment completely excluding them from the reach of the bill.',
    'Now when the government invokes a cabinet confidence, it is not subject to review even by the courts.  It is the most restrictive type of cabinet secrecy among Westminster-style government counterparts.',
    'A confidential cabinet memorandum at the time:',
    'It should be noted that there is a fundamental distinction between, one the one hand, exluding information from the scope of Access and, on the other, exempting it from the right of access. Exempt information is subject to the general regime of the Access to Information legislation in that applicants may request it but have no right it it;',
    'The bill also excluded the Prime Minister’s Office and the political staff of Ministers’ offices, omitting key parts of government from its reach.',
    'The omission of cabinet confidences from the bill and the omission of key offices where government power resides was a bruising disappointment. It would undermine the efficacy of the law from its earliest years.',
    'Finally, on June 28, 1982, the bill passed.  It came into force the following year.',
    'Despite the legislative requirement to study the law every five years, there has been minimal change to the law since it was passed, even as it has played a vital role in Canadian history over the last forty years…',
    'For now, it has fallen on civil society actors to try and fixed the system.'
]

sectionTwoVids = [
    '/vids/Vid4.mp4',
    '/vids/Vid5.mp4',
    '/vids/Vid6.mp4',
    '/vids/Vid7.mp4',
    '/vids/Vid8.mp4',
    '/vids/Vid9.mp4'
]

const sectionTwoImgs = [
    '/sectionTwo/Finland.png',
    '/sectionTwo/Usa.png',
    '/sectionTwo/Denmark.png',
    '/sectionTwo/Norway.png',
    '/sectionTwo/France.png',
    '/sectionTwo/Nova_Scotia.png',
    '/sectionTwo/New_Brunswick.png',
    '/sectionTwo/Newfoundland_and_Labrador.png',
    '/sectionTwo/Quebec.png',
    '/sectionTwo/CanadaDeclassified.png',
    '/sectionTwo/SecretCanada.png',
    '/sectionTwo/OpenByDefault.png'
];

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
        <ParallaxLayer offset={34.5} speed={0.1}>
            <Img img={bannerOneImgs[1]} alignment='ImgCenter'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34.5} speed={0.2}>
            <Img img={bannerOneImgs[2]} alignment='ImgCenter'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34} speed={0.05}>
            <Img img={bannerOneImgs[3]} alignment='ImgHardTop'/>
        </ParallaxLayer>
        <ParallaxLayer offset={34.65} speed={0.3}>
            <Img img={bannerOneImgs[4]} alignment='ImgCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 34, end: 35 }}>
            <Text text={bannerOneTexts[0]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 34, end: 35 }}>
            <Text text={bannerOneTexts[1]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 36, end: 37 }}>
            <Text text={bannerOneTexts[2]} background='BlackBg' alignment='TextCenter'/>
        </ParallaxLayer>

        {/* SECTION TWO */}
        <ParallaxLayer 
            offset={35} 
            factor={35} 
            speed={0}
            style={{backgroundImage: 'linear-gradient(#0a0149,#DDDCE2)'}}
        />

        {/* Put a Timeline thingy here */}
    
        <ParallaxLayer sticky={{ start: 38, end: 39 }}>
            <Text text={sectionTwoTexts[0]} background='BlackBg' alignment='TextLeftCenter'/>
        </ParallaxLayer>
        {/* Flags here */}
        <ParallaxLayer sticky={{ start: 38, end: 39 }}>
            <Text text={sectionTwoTexts[1]} background='BlackBg' alignment='TextRightTop'/>
            <Text text={sectionTwoTexts[2]} background='BlackBg' alignment='TextRightTopCenter'/>
            <Text text={sectionTwoTexts[3]} background='BlackBg' alignment='TextRightBotCenter'/>
            <Text text={sectionTwoTexts[4]} background='BlackBg' alignment='TextRightBot'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 40, end: 41 }}>
            <Text text={sectionTwoTexts[5]} background='BlackBg' alignment='TextLeftCenter'/>
        </ParallaxLayer>
        {/* Flags here */}
        <ParallaxLayer sticky={{ start: 40, end: 41 }}>
            <Text text={sectionTwoTexts[6]} background='BlackBg' alignment='TextRightTop'/>
            <Text text={sectionTwoTexts[7]} background='BlackBg' alignment='TextRightTopCenter'/>
            <Text text={sectionTwoTexts[8]} background='BlackBg' alignment='TextRightBotCenter'/>
            <Text text={sectionTwoTexts[9]} background='BlackBg' alignment='TextRightBot'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 42, end: 46 }}>
            <Video videoPath={sectionTwoVids[0]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 43, end: 44 }}>
            <Text text={sectionTwoTexts[10]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 45, end: 46 }}>
            <Text text={sectionTwoTexts[11]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 47, end: 55 }}>
            <Video videoPath={sectionTwoVids[1]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 48, end: 49 }}>
            <Text text={sectionTwoTexts[12]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 50, end: 51 }}>
            <Text text={sectionTwoTexts[13]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 52, end: 53 }}>
            <Text text={sectionTwoTexts[14]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 54, end: 55 }}>
            <Text text={sectionTwoTexts[15]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 56, end: 58 }}>
            <Video videoPath={sectionTwoVids[2]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 57, end: 58 }}>
            <Text text={sectionTwoTexts[16]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 59, end: 73 }}>
            <Video videoPath={sectionTwoVids[3]} alignment='VidCenter'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 60, end: 61 }}>
            <Text text={sectionTwoTexts[17]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 62, end: 63 }}>
            <Text text={sectionTwoTexts[18]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 64, end: 65 }}>
            <Text text={sectionTwoTexts[19]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 66, end: 67 }}>
            <Text text={sectionTwoTexts[20]} background='BlackBg' alignment='TextCenterBottom'/>
            <Text text={sectionTwoTexts[21]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 68, end: 69 }}>
            <Text text={sectionTwoTexts[22]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 70, end: 71 }}>
            <Text text={sectionTwoTexts[23]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 72, end: 73 }}>
            <Text text={sectionTwoTexts[24]} background='BlackBg' alignment='TextCenterBottom'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 74, end: 76 }}>
            <Video videoPath={sectionTwoVids[4]} alignment='VidRightTop'/>
            <Video videoPath={sectionTwoVids[5]} alignment='VidRightBottom'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 75, end: 76 }}>
            <Text text={sectionTwoTexts[25]} background='BlackBg' alignment='TextLeftCenter'/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 77, end: 79 }}>
            <Text text={sectionTwoTexts[26]} background='BlackBg' alignment='TextCenterTop'/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 78, end: 79 }}> 
            <Img img={sectionOneImgs[9]} alignment='ImgCenterMid'/>
            <Img img={sectionOneImgs[10]} alignment='ImgLeftBottom'/>
            <Img img={sectionOneImgs[11]} alignment='ImgRightBottom'/>
        </ParallaxLayer>

    </Parallax>
);}