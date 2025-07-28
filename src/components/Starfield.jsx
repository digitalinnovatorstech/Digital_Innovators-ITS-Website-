"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useRef, useMemo } from 'react';

// Starfield points component
function Stars(props) {
  const ref = useRef();

  // Generate random star positions in a sphere
  const starPositions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    const radius = 1.5;
    for (let i = 0; i < arr.length; i += 3) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  // Animate the starfield rotation
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.1;
      ref.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={starPositions}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff" // Pure white stars
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

// Main Starfield overlay component
export default function Starfield() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1.5], fov: 75 }}
        style={{
          pointerEvents: 'none',
          opacity: 0.75,
        }}
      >
        <fog attach="fog" args={["#f8f3f3ff", 1.5, 5.5]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
