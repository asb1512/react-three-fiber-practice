import React from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import './App.css';

export default function ThreeD({ active, setActive }) {
  const { spring } = useSpring({
    spring: active,
    config: {
      mass: 2,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });

  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ['#624EA', '#E45858']);

  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{ position: [-10, 10, 10], fov: 35 }}
      >
        <ambientLight />
        <pointLight position={[-10, 10, -10]} castShadow />
        <a.group position-y={scale}>
          <a.mesh
            rotation-y={rotation}
            scale-x={scale}
            scale-z={scale}
            onClick={() => setActive(Number(!active))}
          >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshStandardMaterial
              attach="material"
              roughness={0.5}
              color={color}
            />
          </a.mesh>
        </a.group>
      </Canvas>
    </div>
  );
}

ThreeD.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};
