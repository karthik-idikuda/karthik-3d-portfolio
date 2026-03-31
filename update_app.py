import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# Replace AboutContent
content = re.sub(
    r'function AboutContent\(\) \{.*?\n\}',
    '''function AboutContent() {
  return (
    <>
      <div className="panel-section">
        <div className="stat-grid">
          <div className="stat-card"><span className="stat-num">75+</span><span className="stat-label">Projects</span></div>
          <div className="stat-card"><span className="stat-num">1+</span><span className="stat-label">Year Industrial</span></div>
          <div className="stat-card"><span className="stat-num">13</span><span className="stat-label">Certs</span></div>
        </div>
        <p className="bio-text">
          UX Designer and Full-Stack Developer specializing in AI-enabled product interfaces. Building scalable UIs and production-ready applications using Figma, React, Next.js, and Python-based APIs.
        </p>
        <p className="bio-text" style={{marginTop:8}}>
          Currently pursuing B.Tech in Artificial Intelligence at Marwadi University, while working as a Full Stack Engineer at OriMind. Hands-on experience in computer vision systems and AI integration.
        </p>
      </div>
      <div className="panel-section">
        <div className="panel-section-title">Experience</div>
        <div className="tag-row">
          {['Full Stack Engineer @ OriMind', 'Computer Vision Intern @ Karoza', 'UI/UX Designer @ pax-z'].map(t => (
            <span key={t} className="tag amber">{t}</span>
          ))}
        </div>
      </div>
      <div className="panel-section">
        <div className="panel-section-title">Details</div>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8,fontSize:'0.78rem',color:'var(--text-mid)'}}>
          <IPin /> Hyderabad, India · IST (UTC+5:30)
        </div>
      </div>
      <div className="panel-section">
        <div className="panel-section-title">Core Stack</div>
        <div className="tag-row">
          {['Python','TensorFlow','PyTorch','OpenCV','React','Next.js','TypeScript','FastAPI','Flask','Vite','Tailwind CSS','Figma','Docker','AWS'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </>
  )
}''',
    content,
    flags=re.DOTALL
)

# Replace PROJECTS
content = re.sub(
    r'const PROJECTS = \[.*?\]',
    '''const PROJECTS = [
  { name: 'SYNAPTICA', desc: 'Next-generation AI personal assistant with contextual understanding, task automation, and multi-platform sync.', tags: ['FastAPI', 'PyTorch', 'LLMs'] },
  { name: 'NeuroXAI', desc: 'Explainable AI system for early Alzheimer\\'s detection from MRI scans. Features Grad-CAM visualizations.', tags: ['Python', 'XAI', 'Deep Learning'] },
  { name: 'Self-Evolving Agent', desc: 'Experimental AI agent with recursive self-improvement capabilities. Modifies its own code in a sandbox.', tags: ['LLM', 'AutoGPT'] },
  { name: 'VulnChecker', desc: 'Automated vulnerability scanner with AI-powered risk assessment.', tags: ['Security', 'Python'] },
  { name: 'SOVEREIGN-ATLAS', desc: 'Tactical surveillance dashboard with real-time anomaly detection and threat visualization.', tags: ['Defense', 'CV'] },
  { name: 'SignLingo', desc: 'Real-time sign language translation system.', tags: ['MediaPipe', 'NLP'] },
  { name: 'RoadGuard AI', desc: 'ADAS with real-time hazard detection.', tags: ['YOLO', 'CoreML'] },
  { name: 'AadhaarInsight360', desc: 'Comprehensive analytics platform for UIDAI Data Hackathon 2026. Real-time insights with geospatial analysis.', tags: ['Streamlit', 'Analytics'] },
]''',
    content,
    flags=re.DOTALL
)

# Replace SKILLS
content = re.sub(
    r'const SKILLS = \[.*?\]',
    '''const SKILLS = [
  { group: 'AI / Machine Learning', items: [
    { name: 'Python / TensorFlow / PyTorch', pct: 95 },
    { name: 'Computer Vision / OpenCV', pct: 90 },
    { name: 'LLMs / XAI', pct: 85 },
  ]},
  { group: 'Full-Stack Development', items: [
    { name: 'React / Next.js / TypeScript', pct: 94 },
    { name: 'FastAPI / Flask / Node.js', pct: 88 },
    { name: 'Tailwind CSS / Vite', pct: 92 },
  ]},
  { group: 'UX / Design', items: [
    { name: 'Figma / Prototyping', pct: 90 },
    { name: 'Design Systems / UI Layout', pct: 85 },
  ]},
  { group: 'Cloud & Infrastructure', items: [
    { name: 'AWS / Docker', pct: 80 },
    { name: 'Distributed Systems', pct: 75 },
  ]},
]''',
    content,
    flags=re.DOTALL
)

# Replace ContactContent
content = re.sub(
    r'function ContactContent\(\) \{.*?\n\}',
    '''function ContactContent() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <div className="availability-badge">
        <div className="status-dot" style={{width:6,height:6}} />
        Available for Work · Freelance · Collabs
      </div>
      <div className="panel-section" style={{marginTop:20}}>
        <div className="panel-section-title">Pricing & Services</div>
        <ul className="project-list" style={{marginTop:'0.5rem'}}>
          <li>
            <div className="p-title">Simple App <span style={{color:'var(--forest)',fontSize:'0.75rem',marginLeft:6}}>₹5,000+</span></div>
            <div className="p-desc">Landing pages, portfolios, small tools — clean & fast.</div>
          </li>
          <li>
            <div className="p-title">Frontend + Backend <span style={{color:'var(--forest)',fontSize:'0.75rem',marginLeft:6}}>₹10,000+</span></div>
            <div className="p-desc">Apps with user login, basic API & database.</div>
          </li>
          <li>
            <div className="p-title">Full Production App <span style={{color:'var(--forest)',fontSize:'0.75rem',marginLeft:6}}>₹40,000+</span></div>
            <div className="p-desc">Complete A-Z websites & apps with DB, APIs, deployment.</div>
          </li>
        </ul>
      </div>
      <div className="contact-form" style={{marginTop:20}}>
        <div className="panel-section-title">Send a Message</div>
        {sent ? (
          <p style={{fontSize:'0.8rem',color:'var(--forest)',fontWeight:600}}>Message sent! I'll get back to you soon.</p>
        ) : (
          <>
            <input placeholder="Your name" type="text" />
            <textarea placeholder="Your message..." rows={4} />
            <button onClick={() => setSent(true)}>Send Message →</button>
          </>
        )}
        <div style={{marginTop:'2rem', textAlign:'center'}}>
          <a href="#" className="contact-btn" style={{textDecoration:'none', color:'var(--bg)', background:'var(--text)', padding:'8px 16px', borderRadius:'4px', fontSize:'0.75rem', fontWeight:'600'}}>
            Download Resume (Feb 2026)
          </a>
        </div>
      </div>
    </>
  )
}''',
    content,
    flags=re.DOTALL
)

# Replace badge-title
content = content.replace(
    '<span className="badge-title">AI Builder · Full-Stack Dev · Cybersecurity</span>',
    '<span className="badge-title">AI Builder | Full-Stack Developer | UX Designer</span>'
)

with open('src/App.jsx', 'w') as f:
    f.write(content)

