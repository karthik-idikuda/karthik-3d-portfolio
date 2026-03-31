import React, { useRef } from 'react'
import { Text, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Crystal({ color, position, label }) {
  const meshRef = useRef()
  useFrame(() => {
    if(meshRef.current) {
        meshRef.current.rotation.y += 0.01
    }
  })
  return (
     <group position={position}>
        <Float speed={3} floatIntensity={1.5}>
          <mesh ref={meshRef} position={[0, 1, 0]} castShadow>
            <octahedronGeometry args={[0.8, 0]} />
            <meshToonMaterial color={color} emissive={color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.01, 0]}>
          <circleGeometry args={[1.5, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
        <Text position={[0, 2.5, 0]} fontSize={0.6} outlineWidth={0.05} outlineColor="#000" color="#fff">
            {label}
        </Text>
     </group>
  )
}

export function Zones() {
  return (
    <group>
      <Crystal position={[0, 0, -8]} color="#00bcd4" label="PROFILE" />
      <Crystal position={[8, 0, -8]} color="#9c27b0" label="EXPERIENCE" />
      <Crystal position={[12, 0, 0]} color="#e91e63" label="PROJECTS" />
      <Crystal position={[8, 0, 8]} color="#ffc107" label="SKILLS" />
      <Crystal position={[-8, 0, 8]} color="#4caf50" label="PRICING" />
      <Crystal position={[-12, 0, 0]} color="#ff5722" label="HACKATHONS" />
    </group>
  )
}
