import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleLogic() {
  const points = useRef<THREE.Points>(null!);
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    let seed = 1;
    const rnd = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (rnd() - 0.5) * 15;
      pos[i * 3 + 1] = (rnd() - 0.5) * 15;
      pos[i * 3 + 2] = (rnd() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time + points.current.geometry.attributes.position.array[i3]) * 0.002;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.001;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export const ContactParticles = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50">
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <ParticleLogic />
    </Canvas>
  </div>
);