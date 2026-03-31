import React, { useMemo, useRef, useState } from 'react'
import { ContactShadows } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { playerPositionRef, npcMessageData } from './Player'

// --- REAL-TIME NLP GENERATOR BASED ON USER DATA ---
const userResumeData = {
  projects: ["OmniNet", "PRISM Pharma UI", "TerraView OS", "SYNAPTICA", "NeuroXAI", "Deep-Research Agent", "Self-Evolving Agent"],
  skills: ["React", "Next.js", "Python", "Computer Vision", "Kotlin", "Jetpack Compose", "UI Design"],
  roles: ["CTO at infinall.ai", "AI Builder", "UX Designer"],
  achievements: ["over 80 GitHub repositories", "the IBM Dev Day AI certification", "the AWS Cloud Foundations certificate", "your Hacksagon 2026 participation"]
}

function generateDynamicDialogue() {
  const r = (arr) => arr[Math.floor(Math.random() * arr.length)]
  const project = r(userResumeData.projects)
  const skill = r(userResumeData.skills)
  const role = r(userResumeData.roles)
  const achievement = r(userResumeData.achievements)
  
  const templates = [
    `I am amazed by your work on ${project}. How did you integrate ${skill}?`,
    `As the ${role}, what is your vision for the future of AI agents and networks?`,
    `I saw you have ${achievement}! That requires immense dedication and logic.`,
    `Between ${project} and TerraView OS, which interface was harder to prototype?`,
    `Could you teach me some ${skill} tricks? Living in a 3D world, I could use an upgrade!`,
    `Your GitHub is stacked. Have you considered open-sourcing the ${project} repo?`,
    `I hear ${skill} is your strongest tech. Did you use it heavily for ${project}?`
  ]
  
  return templates[Math.floor(Math.random() * templates.length)]
}

// --- COLLECTABLES SCRIPT TO MAKE THE GAME PLAYABLE ---
function CollectableStar({ initialPosition }) {
  const ref = useRef()
  const [collected, setCollected] = useState(false)
  
  useFrame((state, delta) => {
    if (!ref.current || collected) return
    ref.current.rotation.y += delta * 2
    ref.current.position.y = 1 + Math.sin(state.clock.elapsedTime * 3 + initialPosition[0]) * 0.2
    
    const pPos = playerPositionRef.current
    if (ref.current.position.distanceTo(pPos) < 2.5) {
      setCollected(true)
    }
  })
  
  if (collected) return null

  return (
    <group ref={ref} position={initialPosition}>
      <mesh castShadow>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#fde047" emissive="#eab308" emissiveIntensity={1.5} roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  )
}

function AirParticles() {
  const count = 300
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for(let i=0; i<count; i++) {
       temp.push({
         x: (Math.random() - 0.5) * 150,
         y: Math.random() * 20,
         z: (Math.random() - 0.5) * 150,
         speed: 0.1 + Math.random() * 0.2,
         offset: Math.random() * Math.PI * 2
       })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime
      dummy.position.set(
        particle.x + Math.sin(t * particle.speed + particle.offset) * 2,
        particle.y + Math.cos(t * Math.max(particle.speed * 0.5, 0.05)) * 1,
        particle.z + Math.sin(t * particle.speed * 0.8) * 2
      )
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
    </instancedMesh>
  )
}

function AnimeTree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.4, 3, 6]} />
        <meshToonMaterial color="#5c4033" />
      </mesh>
      <mesh position={[0, 4, 0]} castShadow receiveShadow>
        <sphereGeometry args={[2.5, 8, 8]} />
        <meshToonMaterial color="#228b22" />
      </mesh>
    </group>
  )
}

function AnimeFlower({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 6]} />
        <meshToonMaterial color="#4ade80" />
      </mesh>
      <mesh position={[0, 0.8, 0]} castShadow><sphereGeometry args={[0.2, 8, 8]} /><meshToonMaterial color="#fcd34d" /></mesh>
      <mesh position={[0.2, 0.8, 0]} castShadow><sphereGeometry args={[0.15, 8, 8]} /><meshToonMaterial color="#ef4444" /></mesh>
      <mesh position={[-0.2, 0.8, 0]} castShadow><sphereGeometry args={[0.15, 8, 8]} /><meshToonMaterial color="#ef4444" /></mesh>
      <mesh position={[0, 0.8, 0.2]} castShadow><sphereGeometry args={[0.15, 8, 8]} /><meshToonMaterial color="#ef4444" /></mesh>
      <mesh position={[0, 0.8, -0.2]} castShadow><sphereGeometry args={[0.15, 8, 8]} /><meshToonMaterial color="#ef4444" /></mesh>
    </group>
  )
}

function useNPCLogic(ref, speed, hoverOffset = 0, roamRadius = 25) {
  const targetPos = useRef(null)
  const isWaiting = useRef(false)
  const waitTimer = useRef(0)
  const homePos = useRef(null)
  const lastSpokenTimer = useRef(0)
  const lastMessage = useRef('')

  useFrame((state, delta) => {
    if (!ref.current) return
    if (!homePos.current) {
      homePos.current = ref.current.position.clone()
      targetPos.current = ref.current.position.clone()
    }

    const pPos = playerPositionRef.current
    const distToPlayer = ref.current.position.distanceTo(pPos)
    
    // 1. Interactive State: Player is nearby
    if (distToPlayer <= 4.0) {
      if (Date.now() > lastSpokenTimer.current) {
        lastMessage.current = generateDynamicDialogue()
        lastSpokenTimer.current = Date.now() + 8000 
      }
      npcMessageData.current = lastMessage.current
      npcMessageData.timeout = Date.now() + 500 
      ref.current.position.y = hoverOffset
      
      const dir = pPos.clone().sub(ref.current.position).normalize()
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, Math.atan2(dir.x, dir.z), 0.15)
      return
    }

    // 2. Autonomous Roaming State
    if (isWaiting.current) {
      ref.current.position.y = hoverOffset
      if (state.clock.elapsedTime > waitTimer.current) {
        isWaiting.current = false
        const angle = Math.random() * Math.PI * 2
        const r = Math.random() * roamRadius
        targetPos.current.set(
          homePos.current.x + Math.cos(angle) * r,
          hoverOffset,
          homePos.current.z + Math.sin(angle) * r
        )
      }
    } else {
      const distToTarget = ref.current.position.distanceTo(targetPos.current)
      if (distToTarget < 1.0) {
        isWaiting.current = true
        waitTimer.current = state.clock.elapsedTime + 2 + Math.random() * 5
        ref.current.position.y = hoverOffset
      } else {
        const dir = targetPos.current.clone().sub(ref.current.position).normalize()
        dir.y = 0 
        ref.current.position.addScaledVector(dir, speed * delta)
        const targetAngle = Math.atan2(dir.x, dir.z)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetAngle, 0.1)
        ref.current.position.y = hoverOffset + Math.abs(Math.sin(state.clock.elapsedTime * 15)) * 0.25
      }
    }
  })
}

function DisneyVillager({ initialPosition, rotation, skinColor, shirtColor, hairColor }) {
  const ref = useRef()
  useNPCLogic(ref, 5)
  return (
    <group ref={ref} position={initialPosition} rotation={rotation}>
      <mesh position={[0, 0.7, 0]} castShadow>
        <capsuleGeometry args={[0.25, 0.5, 4, 16]} />
        <meshStandardMaterial color={shirtColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.35, 0]} castShadow>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={skinColor} roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.45, -0.05]} castShadow>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshStandardMaterial color={hairColor} roughness={0.9} />
      </mesh>
      <mesh position={[0.3, 0.8, 0]} rotation={[0, 0, -0.2]} castShadow>
        <capsuleGeometry args={[0.08, 0.3, 4, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.8} />
      </mesh>
      <mesh position={[-0.3, 0.8, 0]} rotation={[0, 0, 0.2]} castShadow>
        <capsuleGeometry args={[0.08, 0.3, 4, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.8} />
      </mesh>
      <mesh position={[0.12, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 8]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[-0.12, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 8]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  )
}

function RealisticFox({ initialPosition, rotation }) {
  const ref = useRef()
  useNPCLogic(ref, 7)
  return (
    <group ref={ref} position={initialPosition} rotation={rotation}>
      <mesh position={[0, 0.4, 0]} castShadow><boxGeometry args={[0.4, 0.3, 0.8]} /><meshStandardMaterial color="#ea580c" roughness={0.9} /></mesh>
      <mesh position={[0, 0.7, 0.4]} castShadow><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial color="#ea580c" roughness={0.9} /></mesh>
      <mesh position={[0, 0.65, 0.6]} castShadow><cylinderGeometry args={[0.05, 0.15, 0.3]} rotation={[1.5, 0, 0]} /><meshStandardMaterial color="#ffffff" roughness={0.9} /></mesh>
      <mesh position={[0.1, 0.9, 0.4]} castShadow><coneGeometry args={[0.08, 0.25, 4]} /><meshStandardMaterial color="#ea580c" roughness={0.9} /></mesh>
      <mesh position={[-0.1, 0.9, 0.4]} castShadow><coneGeometry args={[0.08, 0.25, 4]} /><meshStandardMaterial color="#ea580c" roughness={0.9} /></mesh>
      <mesh position={[0.15, 0.2, 0.3]} castShadow><boxGeometry args={[0.08, 0.4, 0.08]} /><meshStandardMaterial color="#333" roughness={0.9} /></mesh>
      <mesh position={[-0.15, 0.2, 0.3]} castShadow><boxGeometry args={[0.08, 0.4, 0.08]} /><meshStandardMaterial color="#333" roughness={0.9} /></mesh>
      <mesh position={[0.15, 0.2, -0.3]} castShadow><boxGeometry args={[0.08, 0.4, 0.08]} /><meshStandardMaterial color="#333" roughness={0.9} /></mesh>
      <mesh position={[-0.15, 0.2, -0.3]} castShadow><boxGeometry args={[0.08, 0.4, 0.08]} /><meshStandardMaterial color="#333" roughness={0.9} /></mesh>
    </group>
  )
}

function RealisticBunny({ initialPosition, rotation }) {
  const ref = useRef()
  useNPCLogic(ref, 8)
  return (
    <group ref={ref} position={initialPosition} rotation={rotation}>
      <mesh position={[0, 0.2, 0]} castShadow><sphereGeometry args={[0.2, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={0.9}/></mesh>
      <mesh position={[0, 0.5, 0.1]} castShadow><sphereGeometry args={[0.2, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={0.9}/></mesh>
      <mesh position={[0.08, 0.8, 0.1]} castShadow rotation={[0, 0, -0.2]}><capsuleGeometry args={[0.04, 0.2, 4, 8]} /><meshStandardMaterial color="#ffffff" roughness={0.9} /></mesh>
      <mesh position={[-0.08, 0.8, 0.1]} castShadow rotation={[0, 0, 0.2]}><capsuleGeometry args={[0.04, 0.2, 4, 8]} /><meshStandardMaterial color="#ffffff" roughness={0.9} /></mesh>
    </group>
  )
}

function RealisticFlyingSkyBird({ startAngle, radius, height, speed }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + startAngle
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = height + Math.sin(state.clock.elapsedTime * 4) * 2 
    ref.current.rotation.y = -t + Math.PI
    
    if(ref.current.children[2] && ref.current.children[3]) {
        const flap = Math.sin(state.clock.elapsedTime * 20) * 0.5
        ref.current.children[2].rotation.z = -flap
        ref.current.children[3].rotation.z = flap
    }
  })

  return (
    <group ref={ref}>
      <mesh position={[0, 0, 0]} castShadow><capsuleGeometry args={[0.1, 0.3, 8, 8]} rotation={[Math.PI/2, 0, 0]}/><meshStandardMaterial color="#1d4ed8" roughness={0.8} /></mesh>
      <mesh position={[0, 0.1, 0.2]} castShadow rotation={[Math.PI/4, 0, 0]}><coneGeometry args={[0.05, 0.2, 4]} /><meshStandardMaterial color="#fbbf24" /></mesh>
      <mesh position={[0.15, 0, 0]} castShadow><boxGeometry args={[0.4, 0.02, 0.2]} /><meshStandardMaterial color="#2563eb" /></mesh>
      <mesh position={[-0.15, 0, 0]} castShadow><boxGeometry args={[0.4, 0.02, 0.2]} /><meshStandardMaterial color="#2563eb" /></mesh>
    </group>
  )
}

function AnimeCloud({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0, 0]}><sphereGeometry args={[2, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={1.0} transparent opacity={0.9} /></mesh>
      <mesh position={[1.5, -0.5, 0]}><sphereGeometry args={[1.5, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={1.0} transparent opacity={0.9} /></mesh>
      <mesh position={[-1.5, -0.5, 0]}><sphereGeometry args={[1.5, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={1.0} transparent opacity={0.9} /></mesh>
      <mesh position={[0, -0.5, 1.5]}><sphereGeometry args={[1.5, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={1.0} transparent opacity={0.9} /></mesh>
      <mesh position={[0, -0.5, -1.5]}><sphereGeometry args={[1.5, 16, 16]} /><meshStandardMaterial color="#ffffff" roughness={1.0} transparent opacity={0.9} /></mesh>
    </group>
  )
}

export function World() {
  const trees = useMemo(() => {
    const temp = []
    for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = 18 + Math.random() * 40
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const scale = 0.8 + Math.random() * 0.6
        temp.push({ position: [x, 0, z], scale })
    }
    return temp
  }, [])

  const clouds = useMemo(() => {
    const temp = []
    for (let i = 0; i < 20; i++) {
        const x = (Math.random() - 0.5) * 150
        const z = (Math.random() - 0.5) * 150
        const y = 30 + Math.random() * 10
        const scale = 1 + Math.random() * 2
        temp.push({ position: [x, y, z], scale })
    }
    return temp
  }, [])
  
  const flowers = useMemo(() => {
    const temp = []
    for (let i = 0; i < 80; i++) {
        const x = (Math.random() - 0.5) * 60
        const z = (Math.random() - 0.5) * 60
        temp.push({ position: [x, 0, z] })
    }
    return temp
  }, [])

  const flyingBirds = useMemo(() => {
      const temp = []
      for(let i = 0; i < 5; i++) {
          temp.push({ id: `bird-${i}`, radius: 10 + Math.random() * 40, height: 15 + Math.random() * 20, speed: 0.2 + Math.random() * 0.3, startAngle: Math.random() * Math.PI * 2 })
      }
      return temp;
  }, [])
  
  const stars = useMemo(() => {
    const temp = []
    for (let i = 0; i < 20; i++) {
        temp.push({ position: [(Math.random() - 0.5) * 100, 0, (Math.random() - 0.5) * 100] })
    }
    return temp
  }, [])

  return (
    <group>
      {/* Cartoon Blue Sky */}
      <mesh scale={500}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" side={THREE.BackSide} />
      </mesh>

      {/* Actual Sun Mesh & Sunlight */}
      <mesh position={[50, 60, 40]} scale={10}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#fef08a" />
      </mesh>
      
      {/* Air / Dust Particles drifting through the atmosphere */}
      <AirParticles />

      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[50, 60, 40]} 
        intensity={1.8} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />

      {clouds.map((cloud, i) => (
        <AnimeCloud key={`cloud-${i}`} position={cloud.position} scale={cloud.scale} />
      ))}

      {flyingBirds.map((bird) => (
        <RealisticFlyingSkyBird key={bird.id} radius={bird.radius} height={bird.height} speed={bird.speed} startAngle={bird.startAngle} />
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -0.01, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#4ade80" roughness={0.9} />
      </mesh>
      
      {/* 20 Scavenger Hunt Collectable Stars to make the map highly playable */}
      {stars.map((star, i) => (
        <CollectableStar key={`star-${i}`} initialPosition={star.position} />
      ))}

      {flowers.map((fl, i) => (
        <AnimeFlower key={`flower-${i}`} position={fl.position} />
      ))}

      {/* Exactly 10 Stylized Highly Authentic NPCs */}
      <RealisticFox initialPosition={[15, 0, -10]} rotation={[0, 0, 0]} />
      <RealisticBunny initialPosition={[10, 0, 15]} rotation={[0, 3.14, 0]} />
      
      <DisneyVillager initialPosition={[-10, 0, 15]} skinColor="#fcd34d" shirtColor="#ef4444" hairColor="#451a03" />
      <DisneyVillager initialPosition={[-20, 0, 0]} skinColor="#fbcfe8" shirtColor="#3b82f6" hairColor="#fef08a" />
      <DisneyVillager initialPosition={[5, 0, -15]} skinColor="#fed7aa" shirtColor="#10b981" hairColor="#0f172a" />
      <DisneyVillager initialPosition={[-5, 0, -25]} skinColor="#eab308" shirtColor="#8b5cf6" hairColor="#1e293b" />
      <DisneyVillager initialPosition={[25, 0, 5]} skinColor="#f87171" shirtColor="#f97316" hairColor="#fcd34d" />
      <DisneyVillager initialPosition={[20, 0, 25]} skinColor="#c084fc" shirtColor="#2dd4bf" hairColor="#000000" />
      <DisneyVillager initialPosition={[-25, 0, -20]} skinColor="#fef08a" shirtColor="#a8a29e" hairColor="#78350f" />
      <DisneyVillager initialPosition={[0, 0, 25]} skinColor="#ffedd5" shirtColor="#f43f5e" hairColor="#ea580c" />

      {trees.map((tree, i) => (
        <AnimeTree key={`tree-${i}`} position={tree.position} scale={tree.scale} />
      ))}

      <ContactShadows resolution={1024} scale={40} blur={2} opacity={0.4} far={10} color="#000000" />
    </group>
  )
}
