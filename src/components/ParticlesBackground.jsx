// src/components/ParticlesBackground.jsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: 'transparent',
        },
        particles: {
          number: { value: 40 },
          color: { value: '#F0DBA5' }, // Champán Profundo
          shape: { type: 'circle' },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            direction: 'none',
            speed: 0.6,
            outModes: { default: 'out' },
          },
        },
      }}
    />
  );
}
