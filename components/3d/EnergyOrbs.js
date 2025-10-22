'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function EnergyOrbs() {
  const group = useRef();

  const orbs = [
    { position: [8, 0, 0], color: '#4CAF50', size: 0.8 },
    { position: [-8, 3, 2], color: '#2196F3', size: 0.6 },
    { position: [6, -4, -1], color: '#FF9800', size: 0.7 },
    { position: [-6, -2, 3], color: '#9C27B0', size: 0.5 },
  ];

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;
    
    group.current.children.forEach((orb, index) => {
      const data = orbs[index];
      
      // Orbital motion
      const angle = time * 0.5 + index;
      const radius = 8 + Math.sin(time * 0.3 + index) * 2;
      
      orb.position.x = Math.cos(angle) * radius;
      orb.position.z = Math.sin(angle) * radius;
      orb.position.y = data.position[1] + Math.sin(time * 2 + index) * 1.5;
      
      // Rotation and scaling
      orb.rotation.x = time * 0.5;
      orb.rotation.y = time * 0.3;
      
      const scale = 1 + Math.sin(time * 4 + index) * 0.2;
      orb.scale.setScalar(scale);
    });
  });

  return (
    <group ref={group}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position}>
          <sphereGeometry args={[orb.size, 16, 16]} />
          <meshStandardMaterial 
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}