'use client';
import { useRef, useMemo } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingArchitecture() {
  const group = useRef();

  // Create architecture layers in 3D space
  const layers = useMemo(() => [
    { position: [0, 8, -5], color: '#059669', size: [12, 0.5, 8], name: 'Application' },
    { position: [0, 6, -3], color: '#10B981', size: [10, 0.5, 6], name: 'Off-Chain' },
    { position: [0, 4, -1], color: '#34D399', size: [8, 0.5, 4], name: 'On-Chain' },
    { position: [0, 2, 1], color: '#6EE7B7', size: [6, 0.5, 2], name: 'Verification' }
  ], []);

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.elapsedTime;
      group.current.rotation.y = time * 0.05;
      
      // Subtle floating animation
      group.current.children.forEach((layer, index) => {
        layer.position.y = layers[index].position[1] + Math.sin(time * 0.5 + index) * 0.1;
      });
    }
  });

  return (
    <group ref={group}>
      {layers.map((layer, index) => (
        <mesh key={index} position={layer.position}>
          <boxGeometry args={layer.size} />
          <meshStandardMaterial 
            color={layer.color}
            transparent
            opacity={0.8}
            roughness={0.3}
            metalness={0.7}
          />
          {/* Layer label */}
          <mesh position={[0, 0.3, 0]}>
            <planeGeometry args={[3, 0.4]} />
            <meshBasicMaterial color="#0F172A" transparent opacity={0.9} />
          </mesh>
        </mesh>
      ))}
    </group>
  );
}

function DataParticles() {
  const points = useRef();
  const count = 200;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      
      // Gentle floating motion
      const positions = points.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#059669"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectionLines() {
  const lines = useRef();

  const linePositions = useMemo(() => {
    const positions = [];
    
    // Create flowing lines between architecture layers
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 4;
      
      positions.push(
        Math.cos(angle) * radius, 8, Math.sin(angle) * radius - 5,
        Math.cos(angle) * radius * 0.8, 6, Math.sin(angle) * radius * 0.8 - 3,
        Math.cos(angle) * radius * 0.6, 4, Math.sin(angle) * radius * 0.6 - 1,
        Math.cos(angle) * radius * 0.4, 2, Math.sin(angle) * radius * 0.4 + 1
      );
    }
    
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#10B981" transparent opacity={0.3} />
    </lineSegments>
  );
}

export default function ProfessionalScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ 
          position: [0, 5, 15], 
          fov: 50,
          near: 0.1,
          far: 100
        }}
      >
        {/* Professional dark background */}
        <color attach="background" args={['#0F172A']} />
        <fog attach="fog" args={['#0F172A', 10, 30]} />
        
        {/* Professional lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          color="#059669"
        />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#10B981" />
        
        {/* 3D Elements */}
        <FloatingArchitecture />
        <DataParticles />
        <ConnectionLines />
        
        {/* Camera controls would go here */}
      </Canvas>
    </div>
  );
}