
const Building = "/src/components/img/HOC/HOC-Building.png";
const TopClouds = "/src/components/img/HOC/HOC-CloudsTop.png";
const Clouds = "/src/components/img/HOC/HOC-Clouds.png";
const Door = "/src/components/img/HOC/HOC-Door.png";
const FirePit = "/src/components/img/HOC/HOC-Firepit.png";
const Grass = "/src/components/img/HOC/HOC-Grass.png";
const Gravel = "/src/components/img/HOC/HOC-Gravel.png";
const Hedge = "/src/components/img/HOC/HOC-Hedge.png";
const Path = "/src/components/img/HOC/HOC-Path.png";
const Sky = "/src/components/img/HOC/HOC-Sky.png";
const Steps = "/src/components/img/HOC/HOC-Steps.png";

import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../style/styles.modules.css'

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
