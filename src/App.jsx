import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls, Loader } from '@react-three/drei'
import { World } from './components/World'
import { Player } from './components/Player'
import { Zones } from './components/Zones'
import { Sidebar } from './components/Sidebar'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'right', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
]

export default function App() {
  const [activeZone, setActiveZone] = useState(null)

  return (
    <KeyboardControls map={keyboardMap}>
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <Sidebar activeZone={activeZone} />
        
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <React.Suspense fallback={null}>
            <World />
            <Zones />
            <Player setActiveZone={setActiveZone} />
          </React.Suspense>
        </Canvas>
        
        <Loader />
      </div>
    </KeyboardControls>
  )
}
