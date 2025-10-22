'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MouseTrails({ mousePosition, count = 50 }) {
  const points = useRef();
  const trail = useRef([]);

  const trailPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = 0;
    }
    
    trail.current = Array.from({ length: count }, () => new THREE.Vector3());
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;

    const positions = points.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    // Update trail positions
    for (let i = count - 1; i > 0; i--) {
      trail.current[i].copy(trail.current[i - 1]);
    }
    
    // Add new position at mouse
    trail.current[0].set(
      mousePosition.x * 12,
      mousePosition.y * 12,
      Math.sin(time * 5) * 2
    );
    
    // Update geometry
    trail.current.forEach((point, i) => {
      const fade = 1 - (i / count);
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y + Math.sin(time * 10 + i) * 0.1;
      positions[i * 3 + 2] = point.z;
    });
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={trailPositions.length / 3}
          array={trailPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00FF88"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}