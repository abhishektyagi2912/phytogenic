"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

type Blob = {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  geometry: "icosahedron" | "sphere" | "torus";
};

// Kept to the right half of the scene (positive x) and pushed back in depth
// so the floating shapes read as decoration without ever drifting behind
// the hero copy, which is left-aligned over this canvas.
const BLOBS: Blob[] = [
  { position: [3.4, 1, -1.5], scale: 1.4, color: "#3d8760", speed: 1.1, geometry: "icosahedron" },
  { position: [4.4, -1.1, -2.5], scale: 1.7, color: "#2c6b4a", speed: 0.8, geometry: "sphere" },
  { position: [2.6, 1.9, -3], scale: 1, color: "#e8b84b", speed: 1.4, geometry: "torus" },
  { position: [3.6, -2.2, -2], scale: 0.7, color: "#8cc6a2", speed: 1.6, geometry: "sphere" },
  { position: [4.8, 0.4, -3.2], scale: 0.8, color: "#d9a62e", speed: 1.2, geometry: "icosahedron" },
];

function BlobMesh({ blob }: { blob: Blob }) {
  const geometry = useMemo(() => {
    switch (blob.geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 1]} />;
      case "torus":
        return <torusGeometry args={[0.9, 0.32, 32, 64]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [blob.geometry]);

  return (
    <Float speed={blob.speed} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh position={blob.position} scale={blob.scale}>
        {geometry}
        <MeshDistortMaterial
          color={blob.color}
          distort={0.3}
          speed={1.5}
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x = state.pointer.x * 0.35;
    target.current.y = state.pointer.y * 0.2;
    if (group.current) {
      group.current.rotation.y += (target.current.x - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-target.current.y - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 4]} intensity={1.1} />
      <directionalLight position={[-4, -2, -2]} intensity={0.4} color="#e8b84b" />
      {BLOBS.map((blob, i) => (
        <BlobMesh key={i} blob={blob} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
