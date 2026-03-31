import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Avatar(props) {
  // Using a sample Ready Player Me avatar GLB
  const { scene } = useGLTF('https://models.readyplayer.me/64b553e1f0e42d76c7b94924.glb')
  const group = useRef()

  useFrame((state) => {
    // Slight hover & rotation effect
    const t = state.clock.getElapsedTime()
    if(group.current) {
        group.current.position.y = Math.sin(t * 1.5) * 0.1
        group.current.rotation.y = Math.sin(t * 0.5) * 0.2
    }
  })

  // Disable frustum culling to ensure it renders
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.frustumCulled = false
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />
    </group>
  )
}
