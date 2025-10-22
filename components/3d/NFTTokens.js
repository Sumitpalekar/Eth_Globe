'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function NFTTokens() {
  const group = useRef();
  
  const tokens = [
    { position: [2, 1, 0], color: '#4CAF50' },
    { position: [-2, -1, 1], color: '#81C784' },
    { position: [0, 2, -1], color: '#388E3C' },
    { position: [3, -2, 2], color: '#2E7D32' },
  ];

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      group.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 2 + index) * 0.3;
        child.rotation.x = Math.sin(state.clock.elapsedTime * 1.5 + index) * 0.2;
      });
    }
  });

  return (
    <group ref={group}>
      {tokens.map((token, index) => (
        <mesh key={index} position={token.position}>
          <boxGeometry args={[1, 1.4, 0.1]} />
          <meshPhongMaterial 
            color={token.color}
            emissive={token.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}