'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AdvancedParticles({ mousePosition = { x: 0, y: 0 }, count = 200 }) {
  const points = useRef();
  const particles = useRef([]);

  // Create particles with physics properties
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      // Velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    particles.current = Array.from({ length: count }, (_, i) => ({
      position: new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1], 
        positions[i * 3 + 2]
      ),
      velocity: new THREE.Vector3(
        velocities[i * 3],
        velocities[i * 3 + 1],
        velocities[i * 3 + 2]
      ),
      originalPosition: new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      )
    }));
    
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;

    const positions = points.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    particles.current.forEach((particle, i) => {
      // Safe mouse interaction with null check
      if (mousePosition && mousePosition.x !== undefined && mousePosition.y !== undefined) {
        const mouseVector = new THREE.Vector3(mousePosition.x * 8, mousePosition.y * 8, 0);
        const distanceToMouse = particle.position.distanceTo(mouseVector);
        
        if (distanceToMouse < 4) {
          const direction = particle.position.clone().sub(mouseVector).normalize();
          particle.velocity.add(direction.multiplyScalar(0.08));
        }
      }
      
      // Return to original position with spring physics
      const returnForce = particle.originalPosition.clone().sub(particle.position).multiplyScalar(0.008);
      particle.velocity.add(returnForce);
      
      // Apply velocity damping
      particle.velocity.multiplyScalar(0.96);
      
      // Update position
      particle.position.add(particle.velocity);
      
      // Add subtle floating motion
      particle.position.y += Math.sin(time + i * 0.1) * 0.001;
      
      // Boundary check
      if (particle.position.length() > 20) {
        particle.velocity.multiplyScalar(-0.3);
      }
      
      // Update geometry
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
    });
    
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.02;
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
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}