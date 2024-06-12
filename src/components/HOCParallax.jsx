import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Building = "src/components/img/HOC/HOC-Building.png";
const TopClouds = "src/components/img/HOC/HOC-CloudsTop.png";
const Clouds = "src/components/img/HOC/HOC-Clouds.png";
const Door = "src/components/img/HOC/HOC-Door.png";
const FirePit = "src/components/img/HOC/HOC-Firepit.png";
const Grass = "src/components/img/HOC/HOC-Grass.png";
const Gravel = "src/components/img/HOC/HOC-Gravel.png";
const Hedge = "src/components/img/HOC/HOC-Hedge.png";
const Path = "src/components/img/HOC/HOC-Path.png";
const Sky = "src/components/img/HOC/HOC-Sky.png";
const Steps = "src/components/img/HOC/HOC-Steps.png";

const ParallaxComponent = () => {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: Building,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: TopClouds,
            backgroundSize: 'cover',
          }}
        />
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;

