import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import mainbuilding from '../imgs/Phill/Parliment Hill - HOC.png?url'
import lclouds from '../imgs/Phill/Parliment Hill - Light Cloud.png';
import dclouds from '../imgs/Phill/Parliment Hill - Dark Cloud.png?url';
import hill from '../imgs/Phill/Parliment Hill - Hill.png';
import sky from '../imgs/Phill/Parliment Hill - Sky.png?url';
import water from '../imgs/Phill/Parliment Hill - Water.png';

export default function ParallaxContent() {
  return (
    <div style={{ backgroundImage:`url(${new URL(sky, import.meta.url).href})`, width:'100vw', height: '100vh' }}>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <div style={{
            backgroundImage: `url(${new URL(lclouds, import.meta.url).href})`,
            backgroundSize: 'cover',
            //backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%'
          }}>

            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.8} factor={1}>
          <div style={{
            backgroundImage: `url(${new URL(dclouds, import.meta.url).href})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}