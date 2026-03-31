import React from 'react'

const projects = [
  { 
    title: "SYNAPTICA", 
    desc: "Next-gen AI assistant with contextual awareness.", 
    tag: "AI/ML",
    icon: "nes-icon coin is-large"
  },
  { 
    title: "NeuroXAI", 
    desc: "Explainable AI pipeline for medical imaging.", 
    tag: "Healthcare",
    icon: "nes-icon heart is-large"
  },
  { 
    title: "TerraView OS", 
    desc: "3D real-time mapping platform built with MapLibre & WebGL.", 
    tag: "Web3D",
    icon: "nes-icon star is-large"
  },
  {
    title: "Crypto Dashboard", 
    desc: "Real-time web3 analytics and blockchain tracking.", 
    tag: "Web3",
    icon: "nes-icon trophy is-large"
  }
]

export function Projects() {
  return (
    <section className="mb-10">
      <h2 className="mb-6 text-xl text-center" style={{ color: '#f3f3f3' }}>
        <i className="nes-icon trophy"></i> Quests Log
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="nes-container is-rounded is-dark">
            <div className="flex items-center gap-4 mb-4">
              <i className={p.icon}></i>
              <h3 className="text-sm pt-2 text-success">{p.title}</h3>
            </div>
            <p className="text-xs text-gray mb-4 h-16">{p.desc}</p>
            <div className="flex justify-between items-center text-xs">
              <span className="nes-text is-warning">{p.tag}</span>
              <button href="#" className="nes-btn is-success" style={{ fontSize: '10px', padding: '4px 8px' }}>Launch</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
