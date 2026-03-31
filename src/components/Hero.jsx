import React from 'react'

export function Hero() {
  return (
    <section className="nes-container is-dark with-title mb-10 mt-12">
      <p className="title">Player Info</p>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <i className="nes-ash self-start hidden md:block" style={{ transform: 'scale(1.5)', margin: '20px' }}></i>
        
        <div className="w-full">
          <div className="nes-balloon from-left is-dark w-full mb-6">
            <p className="text-sm">Hello! I am Karthik Idikuda.</p>
          </div>
          
          <p className="mb-4 text-xs leading-relaxed text-warning">
            LVL 99 AI Product Engineer & Full Stack Developer.
          </p>
          <p className="text-xs mb-6 text-gray leading-relaxed">
            Specializing in intelligent systems, Web3, and crafting interactive digital experiences. Equipped with high-tier coding artifacts and machine learning spellbooks.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/karthik-idikuda" target="_blank" rel="noreferrer" className="nes-btn is-primary text-xs">GitHub</a>
            <button className="nes-btn text-xs">Contact</button>
          </div>
        </div>
      </div>
    </section>
  )
}
