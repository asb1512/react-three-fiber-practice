import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 40 }}
      >
        <ambientLight color="white" position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[-10, 10, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial attach="material" color="#5C80BC" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
