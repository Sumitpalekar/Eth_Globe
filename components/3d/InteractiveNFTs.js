'use client';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function InteractiveNFTs({ mousePosition }) {
  const group = useRef();
  const [hoveredNFT, setHoveredNFT] = useState(null);

  const nfts = [
    { id: 1, position: [5, 2, 0], color: '#4CAF50', type: 'solar', size: [1.2, 1.6, 0.1] },
    { id: 2, position: [-4, 1, 2], color: '#2196F3', type: 'wind', size: [1.2, 1.6, 0.1] },
    { id: 3, position: [3, -3, -1], color: '#FF9800', type: 'hydro', size: [1.2, 1.6, 0.1] },
    { id: 4, position: [-5, -1, 3], color: '#9C27B0', type: 'carbon', size: [1.2, 1.6, 0.1] },
    { id: 5, position: [0, 4, 1], color: '#00BCD4', type: 'bio', size: [1.2, 1.6, 0.1] },
    { id: 6, position: [2, -4, -2], color: '#8BC34A', type: 'geo', size: [1.2, 1.6, 0.1] },
  ];

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;
    
    group.current.children.forEach((nft, index) => {
      const data = nfts[index];
      
      // Base floating animation
      nft.position.y = data.position[1] + Math.sin(time * 2 + index) * 0.5;
      nft.rotation.y = time * 0.3 + index;
      nft.rotation.x = Math.sin(time * 1.5 + index) * 0.1;
      
      // Mouse attraction
      const mouseVector = new THREE.Vector3(mousePosition.x * 8, mousePosition.y * 8, 0);
      const distanceToMouse = nft.position.distanceTo(mouseVector);
      
      if (distanceToMouse < 4) {
        const direction = mouseVector.clone().sub(nft.position).normalize();
        nft.position.add(direction.multiplyScalar(0.1));
        
        // Glow effect on hover
        nft.material.emissiveIntensity = 0.8;
        nft.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        nft.material.emissiveIntensity = 0.3;
        nft.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
      
      // Pulsing animation
      const pulse = Math.sin(time * 3 + index) * 0.1 + 1;
      nft.scale.multiplyScalar(pulse);
    });
  });

  const handleNFTClick = (nftId) => {
    console.log(`NFT ${nftId} clicked!`);
    // Will integrate with Web3 in next step
  };

  return (
    <group ref={group}>
      {nfts.map((nft, index) => (
        <mesh
          key={nft.id}
          position={nft.position}
          onClick={() => handleNFTClick(nft.id)}
          onPointerEnter={() => setHoveredNFT(nft.id)}
          onPointerLeave={() => setHoveredNFT(null)}
        >
          <boxGeometry args={nft.size} />
          <meshPhongMaterial 
            color={nft.color}
            emissive={nft.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
            shininess={100}
          />
        </mesh>
      ))}
    </group>
  );
}