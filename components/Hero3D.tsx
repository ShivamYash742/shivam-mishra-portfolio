'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function GlowCore() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.25 + Math.sin(t * 1.4) * 0.12;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.7, 32, 32]} />
      <meshStandardMaterial
        color="#2d0a5e"
        emissive="#7C3AED"
        emissiveIntensity={0.25}
        transparent
        opacity={0.18}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

function Ring({
  rotation,
  color,
  radius,
  speed,
  opacity = 0.65,
}: {
  rotation: [number, number, number];
  color: string;
  radius: number;
  speed: number;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.z += speed;
  });
  return (
    <mesh ref={ref} rotation={new THREE.Euler(...rotation)}>
      <torusGeometry args={[radius, 0.014, 16, 200]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function OrbitingParticle({
  radius,
  speed,
  offset,
  yTilt,
  color,
  size = 0.065,
}: {
  radius: number;
  speed: number;
  offset: number;
  yTilt: number;
  color: string;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t) * radius * Math.cos(yTilt);
    ref.current.position.z = Math.sin(t) * radius * Math.sin(yTilt);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} />
    </mesh>
  );
}

function FloatingGem({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={0.6} position={position}>
      <mesh>
        <octahedronGeometry args={[0.17, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

function PulseRing({ radius, speed }: { radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    const scale = 1 + Math.sin(t) * 0.08;
    ref.current.scale.setScalar(scale);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(t) * 0.08;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.025, 8, 100]} />
      <meshBasicMaterial color="#7C3AED" transparent opacity={0.15} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 42 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 5]} intensity={6} color="#7C3AED" />
      <pointLight position={[-6, -4, 5]} intensity={3} color="#06B6D4" />
      <pointLight position={[0, 0, 5]} intensity={2.5} color="#8B5CF6" />

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

      <GlowCore />
      <PulseRing radius={2.0} speed={0.8} />
      <PulseRing radius={2.4} speed={-0.6} />

      {/* Multi-angle orbiting rings */}
      <Ring rotation={[0.3, 0, 0]} color="#7C3AED" radius={2.3} speed={0.003} />
      <Ring rotation={[1.2, 0.3, 0]} color="#06B6D4" radius={2.9} speed={-0.002} />
      <Ring rotation={[0.7, 1.0, 0.4]} color="#8B5CF6" radius={3.5} speed={0.0018} />
      <Ring rotation={[1.5, 0.5, 1.0]} color="#22D3EE" radius={4.0} speed={-0.0012} opacity={0.45} />
      <Ring rotation={[0.2, 1.5, 0.8]} color="#A78BFA" radius={4.6} speed={0.0009} opacity={0.3} />

      {/* Orbiting particles on ring paths */}
      <OrbitingParticle radius={2.3} speed={1.2} offset={0} yTilt={0.4} color="#A78BFA" />
      <OrbitingParticle radius={2.3} speed={1.2} offset={Math.PI} yTilt={0.4} color="#7C3AED" />
      <OrbitingParticle radius={2.9} speed={-0.85} offset={1.5} yTilt={1.1} color="#06B6D4" />
      <OrbitingParticle radius={2.9} speed={-0.85} offset={4.5} yTilt={1.1} color="#22D3EE" />
      <OrbitingParticle radius={3.5} speed={1.0} offset={3} yTilt={0.9} color="#8B5CF6" />
      <OrbitingParticle radius={3.5} speed={1.0} offset={0.5} yTilt={2.0} color="#A78BFA" size={0.05} />

      {/* Floating gems in background */}
      <FloatingGem position={[-3.8, 1.8, -1.5]} color="#7C3AED" />
      <FloatingGem position={[3.5, -2.0, -0.8]} color="#06B6D4" />
      <FloatingGem position={[-2.2, -3.0, 1.2]} color="#A78BFA" />
      <FloatingGem position={[2.8, 2.5, -2.0]} color="#22D3EE" />
      <FloatingGem position={[-4.2, -0.8, 0.8]} color="#8B5CF6" />
      <FloatingGem position={[1.2, 3.8, -1.5]} color="#7C3AED" />
      <FloatingGem position={[3.8, 0.5, 1.0]} color="#A78BFA" />
      <FloatingGem position={[-1.5, 3.2, -0.5]} color="#06B6D4" />
    </Canvas>
  );
}
