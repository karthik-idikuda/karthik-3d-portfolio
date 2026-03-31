import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls, Html } from '@react-three/drei'
import * as THREE from 'three'

// Shared context for NPCs so they know where the player is!
export const playerPositionRef = { current: new THREE.Vector3(0, 0, 0) }
export const npcMessageData = { current: null, timeout: 0 }

const ZONES = {
  Profile: new THREE.Vector3(0, 0, -8),
  Experience: new THREE.Vector3(8, 0, -8),
  Projects: new THREE.Vector3(12, 0, 0),
  Skills: new THREE.Vector3(8, 0, 8),
  Pricing: new THREE.Vector3(-8, 0, 8),
  Achievements: new THREE.Vector3(-12, 0, 0)
}

function RobotAvatar() {
  return (
    <group position={[0, 0.4, 0]}>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.5, 0.8, 8]} />
        <meshToonMaterial color="#e53935" />
      </mesh>
      <mesh position={[0, 0.7, 0]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshToonMaterial color="#ffccbc" />
      </mesh>
      <mesh position={[0, 1.0, -0.1]} castShadow rotation={[0.2, 0, 0]}>
        <coneGeometry args={[0.5, 0.5, 8]} />
        <meshToonMaterial color="#ffc107" />
      </mesh>
      <mesh position={[0.2, 0.9, 0.1]} castShadow rotation={[0.2, 0, -0.5]}>
        <coneGeometry args={[0.3, 0.4, 8]} />
        <meshToonMaterial color="#ffc107" />
      </mesh>
      <mesh position={[-0.2, 0.9, 0.1]} castShadow rotation={[0.2, 0, 0.5]}>
        <coneGeometry args={[0.3, 0.4, 8]} />
        <meshToonMaterial color="#ffc107" />
      </mesh>
    </group>
  )
}

export function Player({ setActiveZone }) {
  const group = useRef()
  const [, get] = useKeyboardControls()
  const activeZoneRef = useRef(null)
  const velocityY = useRef(0)
  
  const [npcMessage, setNpcMessage] = useState(null)
  const npcMessageRef = useRef(null)
  
  const speed = 11 // Adjusted Player Speed so they can escape animals!
  const gravity = -25
  const jumpForce = 10
  
  useFrame((state, delta) => {
    if(!group.current) return
    const { forward, backward, left, right, jump } = get()
    
    let moveZ = (forward ? -1 : 0) + (backward ? 1 : 0)
    let moveX = (left ? -1 : 0) + (right ? 1 : 0)
    
    if (jump && group.current.position.y <= 0) {
      velocityY.current = jumpForce
    }
    
    velocityY.current += gravity * delta
    group.current.position.y += velocityY.current * delta
    
    if (group.current.position.y < 0) {
      group.current.position.y = 0
      velocityY.current = 0
    }
    
    if (moveX !== 0 || moveZ !== 0) {
      const direction = new THREE.Vector3(moveX, 0, moveZ).normalize()
      group.current.position.addScaledVector(direction, speed * delta)
      const targetAngle = Math.atan2(direction.x, direction.z)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetAngle, 0.2)
      
      if (group.current.position.y === 0) {
         group.current.children[0].position.y = Math.abs(Math.sin(state.clock.elapsedTime * 15)) * 0.1 + 0.4
      }
    } else {
      group.current.children[0].position.y = THREE.MathUtils.lerp(group.current.children[0].position.y, 0.4, 0.1)
    }

    // Continuously share Player Position for NPCs to track!
    playerPositionRef.current.copy(group.current.position)
    
    let currentZone = null
    for (const [zoneName, pos] of Object.entries(ZONES)) {
      if (group.current.position.distanceTo(pos) < 2.5) {
        currentZone = zoneName
        break
      }
    }
    
    if (activeZoneRef.current !== currentZone) {
      activeZoneRef.current = currentZone
      setActiveZone(currentZone)
    }
    
    // Check if an NPC recently pinged us
    if (Date.now() > npcMessageData.timeout) {
      npcMessageData.current = null
    }
    
    if (npcMessageRef.current !== npcMessageData.current) {
      npcMessageRef.current = npcMessageData.current
      setNpcMessage(npcMessageData.current)
    }
    
    const cameraOffset = new THREE.Vector3(0, 6, 13)
    const targetCameraPos = group.current.position.clone().add(cameraOffset)
    state.camera.position.lerp(targetCameraPos, 0.1)
    state.camera.lookAt(group.current.position.x, group.current.position.y + 1, group.current.position.z)
  })

  // Automatic Voice (Text-to-Speech)
  useEffect(() => {
    if (npcMessage) {
      window.speechSynthesis.cancel() 
      const utterance = new SpeechSynthesisUtterance(npcMessage)
      utterance.pitch = 1.25 
      utterance.rate = 1.05
      window.speechSynthesis.speak(utterance)
    }
  }, [npcMessage])

  return (
    <group ref={group} position={[0,0,0]}>
      <RobotAvatar />
      {/* DISNEY STYLE UI BUBBLE */}
      {npcMessage && (
        <Html position={[0, 2.5, 0]} center zIndexRange={[100, 0]}>
          <div className="bg-white/95 backdrop-blur-sm border-4 border-sky-300 px-6 py-4 rounded-[2rem] font-sans text-sky-900 text-center w-80 shadow-[0_10px_30px_rgba(0,0,0,0.15)] pointer-events-none transition-all duration-300">
            <span className="text-[15px] font-bold leading-relaxed">
              {npcMessage}
            </span>
            <div className="absolute w-8 h-8 bg-white/95 border-r-4 border-b-4 border-sky-300 transform rotate-45 -bottom-4 left-1/2 -ml-4 z-[-1]" />
          </div>
        </Html>
      )}
    </group>
  )
}
