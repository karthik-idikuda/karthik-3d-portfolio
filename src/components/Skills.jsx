import React from 'react'

export function Skills() {
  return (
    <section className="nes-container is-dark with-title mb-10">
      <p className="title">Inventory / Skills</p>
      
      <div className="lists">
        <ul className="nes-list is-circle text-xs mb-4">
          <li className="mb-2">Weapons: React, Next.js, Node.js, Python</li>
          <li className="mb-2">Armor: Docker, AWS, PostgreSQL</li>
          <li className="mb-2">Magic: LLMs, PyTorch, RAG, WebGL</li>
        </ul>
      </div>

      <div className="flex gap-6 mt-6 border-t border-white pt-4 border-dashed">
        <div className="text-center">
            <i className="nes-logo"></i>
            <p className="text-[10px] mt-2">Retro</p>
        </div>
        <div className="text-center">
            <i className="nes-smartphone"></i>
            <p className="text-[10px] mt-2">Mobile</p>
        </div>
        <div className="text-center">
            <i className="nes-kirby"></i>
            <p className="text-[10px] mt-2">Design</p>
        </div>
      </div>
    </section>
  )
}
