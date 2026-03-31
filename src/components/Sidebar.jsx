import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Link, GraduationCap, 
  ChevronRight, Star, Coins, CircleDollarSign, 
  Gem, Crown, FileText, Download 
} from 'lucide-react'

export function Sidebar({ activeZone }) {
  const content = {
    Profile: (
      <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-2 text-yellow-300 drop-shadow-md">Karthik Idikuda</h2>
        <p className="text-2xl leading-relaxed mb-4 text-white drop-shadow-sm">
          AI Builder | Full-Stack Developer | UX Designer | CTO @ infinall.ai
        </p>

        <div className="bg-black/40 p-4 rounded-lg border border-white/30 mb-6 text-xl text-gray-200">
           <p className="mb-2 flex items-center"><MapPin className="w-5 h-5 mr-3 text-red-400" /> Hyderabad, Telangana, India</p>
           <p className="mb-2 flex items-center"><Phone className="w-5 h-5 mr-3 text-green-400" /> 9494432697 (Mobile)</p>
           <p className="mb-2 flex items-center"><Mail className="w-5 h-5 mr-3 text-blue-400" /> idikudakarthik55@gmail.com</p>
           <p className="mb-2 flex items-center"><Link className="w-5 h-5 mr-3 text-cyan-400" /> <a href="https://www.linkedin.com/in/karthik129259" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-400 pointer-events-auto">linkedin.com/in/karthik129259</a></p>
           <p className="mb-1 flex items-center"><Link className="w-5 h-5 mr-3 text-cyan-400" /> <a href="https://github.com/karthik-idikuda" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-400 pointer-events-auto">github.com/karthik-idikuda</a></p>
        </div>

        <p className="text-xl leading-relaxed mb-6 text-gray-300">
          UX Designer and Full-Stack Developer specializing in AI-enabled product interfaces, currently pursuing a B.Tech in Artificial Intelligence at Marwadi University. I build scalable user interfaces and production-ready applications using Figma, React, Next.js, and Python-based APIs. I also have hands-on experience in computer vision systems and AI integration for real-world applications.
          <br/><br/>
          Actively seeking opportunities in UX design, full-stack development, and AI-driven product teams where I can contribute to impactful digital solutions.
        </p>

        <h3 className="text-3xl mt-4 mb-3 text-green-300 drop-shadow-md flex items-center">Education</h3>
        <p className="text-xl text-gray-300 mb-2 flex items-center"><GraduationCap className="w-6 h-6 mr-3 text-yellow-300" /> B.Tech Artificial Intelligence - Marwadi University (2024-2027)</p>
        <p className="text-xl text-gray-300 mb-6 flex items-center"><GraduationCap className="w-6 h-6 mr-3 text-yellow-300" /> Diploma Computer Sci - Sree Dattaha Inst. (2021-2024, Grade A)</p>
        
        <h3 className="text-3xl mt-6 mb-4 text-yellow-300 drop-shadow-md">Patents & Documents</h3>
        <ul className="text-xl space-y-3 pb-6">
            <li className="flex items-center"><FileText className="w-5 h-5 mr-3 text-white" /> <a href="/patent.pdf" target="_blank" rel="noreferrer" className="hover:text-blue-300 pointer-events-auto">Meeting Room Management System (Published Inventor)</a></li>
            <li className="flex items-center"><Download className="w-5 h-5 mr-3 text-white" /> <a href="/Karthik_Idikuda_Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-blue-300 pointer-events-auto">Resume (PDF)</a></li>
        </ul>
      </div>
    ),
    Achievements: (
      <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-4 text-orange-300 drop-shadow-md">Hackathons & Honors</h2>
        
        <div className="mb-6 border-b border-white/20 pb-4">
            <h3 className="text-2xl text-yellow-300 flex items-center"><ChevronRight className="w-6 h-6 mr-1" /> YUVAAN 2026 - National AI/ML Hackathon</h3>
            <p className="text-xl mt-1 text-gray-200 ml-7">AVEVA x IIT Hyderabad Finalist. Presented PRISM (Pharma AI Dashboard) with Team AXOBIA.</p>
        </div>

        <div className="mb-6 border-b border-white/20 pb-4">
            <h3 className="text-2xl text-yellow-300 flex items-center"><ChevronRight className="w-6 h-6 mr-1" /> Hack For Green Bharat</h3>
            <p className="text-xl mt-1 text-gray-200 ml-7">Competed intensely with Team AXOBIA, executing complex solutions under pressure.</p>
        </div>

        <div className="mb-6 border-b border-white/20 pb-4">
            <h3 className="text-2xl text-yellow-300 flex items-center"><ChevronRight className="w-6 h-6 mr-1" /> Codefest'26 - Vista Event</h3>
            <p className="text-xl mt-1 text-gray-200 ml-7">Earned Certificate of Participation from Dept. of CSE, IIT(BHU) Varanasi. Challenged boundaries with brilliant minds.</p>
        </div>
        
        <div className="mb-6 border-b border-white/20 pb-4">
            <h3 className="text-2xl text-yellow-300 flex items-center"><ChevronRight className="w-6 h-6 mr-1" /> IBM Dev Day: AI Demystified</h3>
            <p className="text-xl mt-1 text-gray-200 ml-7">Immersive hackathon exploring real-world AI applications and emerging technologies.</p>
        </div>

        <div className="mb-2">
            <h3 className="text-2xl text-yellow-300 flex items-center"><ChevronRight className="w-6 h-6 mr-1" /> HACKSAGON 2026</h3>
            <p className="text-xl mt-1 text-gray-200 ml-7">Ideation Phase participant, organized by ABV-IIITM IEEE Student Branch.</p>
        </div>
      </div>
    ),
    Experience: (
       <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-4 text-purple-300 drop-shadow-md">Quest History</h2>
        
        <div className="mb-6 border-b border-white/20 pb-6">
            <h3 className="text-3xl text-yellow-300 mb-2 flex items-center"><ChevronRight className="w-8 h-8 mr-1" /> infinall.ai</h3>
            <p className="text-xl text-green-300 italic mb-1 ml-9">AI Engineer / Co-Founder (March 2026 - Present)</p>
            <p className="text-xl text-green-300 italic mb-3 ml-9">Full Stack Engineer (Jan 2026 - Feb 2026)</p>
            <ul className="text-xl text-gray-200 list-disc pl-14 space-y-2">
               <li>Developed scalable front-end applications using React and Next.js, improving performance and user experience.</li>
               <li>Built and maintained FastAPI and Flask APIs to support AI features, enhancing backend stability and reducing issues through testing and debugging.</li>
               <li>Worked closely with product and design teams to deliver user-focused solutions aligned with business objectives.</li>
               <li>Implemented responsive designs to ensure a seamless experience across desktop and mobile devices.</li>
            </ul>
        </div>

        <div className="mb-6 border-b border-white/20 pb-6">
            <h3 className="text-3xl text-yellow-300 mb-2 flex items-center"><ChevronRight className="w-8 h-8 mr-1" /> Karoza Technologies LLP</h3>
            <p className="text-xl text-green-300 italic mb-3 ml-9">Computer Vision Intern (Jun 2025 - Dec 2025)</p>
            <ul className="text-xl text-gray-200 list-disc pl-14 space-y-2">
               <li>Built real-time object detection and tracking systems using OpenCV and TensorFlow/PyTorch for automation applications.</li>
               <li>Optimized models for better accuracy and faster performance in production environments.</li>
               <li>Worked with engineering teams to integrate computer vision solutions into existing platforms.</li>
               <li>Applied image processing techniques to improve model performance across diverse data sources.</li>
            </ul>
        </div>

        <div className="mb-6 border-b border-white/20 pb-6">
            <h3 className="text-3xl text-yellow-300 mb-2 flex items-center"><ChevronRight className="w-8 h-8 mr-1" /> pax-z</h3>
            <p className="text-xl text-green-300 italic mb-3 ml-9">User Interface Designer (Oct 2024 - Jan 2025)</p>
            <ul className="text-xl text-gray-200 list-disc pl-14 space-y-2">
               <li>Designed and prototyped user interfaces using Figma to improve usability and engagement.</li>
               <li>Created wireframes, mockups, and interactive prototypes for web and mobile platforms.</li>
               <li>Collaborated with developers and product managers to translate requirements into UI designs.</li>
               <li>Conducted usability testing to refine workflows and enhance accessibility.</li>
               <li>Maintained consistent design systems across multiple product screens.</li>
            </ul>
        </div>

        <div className="mb-6 pb-6">
            <h3 className="text-3xl text-yellow-300 mb-2 flex items-center"><ChevronRight className="w-8 h-8 mr-1" /> NSIC Tech Services Centre</h3>
            <p className="text-xl text-green-300 italic mb-3 ml-9">Industrial Training (Jan 2024 - Jun 2024)</p>
            <ul className="text-xl text-gray-200 list-disc pl-14 space-y-2">
               <li>Completed hands-on projects addressing real-world computer science challenges.</li>
               <li>Worked with senior engineers to understand software development workflows and IT systems.</li>
               <li>Delivered technical tasks within deadlines in fast-paced project environments.</li>
               <li>Strengthened problem-solving and team collaboration skills through applied project work.</li>
            </ul>
        </div>
      </div>
    ),
    Projects: (
      <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-4 text-pink-300 drop-shadow-md">Flagship Quests</h2>
        <ul className="space-y-6 text-xl">
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> OmniNet</span>
            <span className="block mt-2 ml-8">Fully decentralized offline messaging Android app. Bluetooth 5 Coded PHY spanning 1km, ultrasonic 18kHz acoustic fallback, completely offline with custom geographic routing.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> PRISM (Pharma AI)</span>
            <span className="block mt-2 ml-8">AI dashboard tracking high-volume batch manufacturing. LightGBM predicting tablet quality under 10ms alongside automated root cause analysis via SHAP.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> TerraView OS</span>
            <span className="block mt-2 ml-8">Open-source Google Maps alternative running Next.js 16 + MapLibre GL. Offers 3D paths, dynamic weather generation, routing, entirely free without paywalls.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> SYNAPTICA</span>
            <span className="block mt-2 ml-8">Next-gen AI personal assistant with deep contextual understanding & multi-platform sync.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> NeuroXAI</span>
            <span className="block mt-2 ml-8">Pioneering Medical AI providing Alzheimer's identification via MRI, powered by Grad-CAM.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> Deep-Research-Agent</span>
            <span className="block mt-2 ml-8">Intelligent crawler validating cross-references over 7 parallel channels concurrently.</span>
          </li>
          <li className="border-b border-white/30 pb-4">
            <span className="text-yellow-300 text-2xl flex items-center"><Star className="w-6 h-6 mr-2 fill-yellow-300" /> Self-Evolving Agent & OS-Agent</span>
            <span className="block mt-2 ml-8">Recursive self-improving AI and a natural language shell command system.</span>
          </li>
        </ul>
        <h3 className="text-3xl mt-6 mb-4 text-blue-300">88 Total Repositories</h3>
        <p className="text-xl text-gray-300 mb-4 ml-8">
          AI & ML (30) • Web Dev (18) • Computer Vision (18) • Tools & Sec (14) • Cloud (5) • Hackathons (3)
        </p>
        <a href="https://github.com/karthik-idikuda" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-300 hover:text-blue-400 text-2xl animate-pulse pointer-events-auto ml-8"><ChevronRight className="w-6 h-6 mr-1" /> View Complete GitHub Profile</a>
      </div>
    ),
    Skills: (
      <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-4 text-blue-300 drop-shadow-md">Top Skills & Tech Arsenal</h2>
        <div className="flex flex-wrap gap-3">
           {['Image Processing', 'Object Tracking', 'User Interface Design', 'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'React', 'Next.js', 'Kotlin', 'Jetpack Compose', 'TypeScript', 'FastAPI', 'Flask', 'Vite', 'Tailwind CSS', 'Figma', 'Docker'].map(s => (
               <span key={s} className="bg-blue-900/50 border border-blue-400 px-3 py-1 rounded text-xl text-yellow-100">{s}</span>
           ))}
        </div>

        <h2 className="text-4xl mt-8 mb-4 text-green-300 drop-shadow-md">Official Certifications</h2>
        <div className="flex flex-wrap gap-3 pb-4">
           {['IBM Dev Day AI Demystified Hackthon', 'Introduction to Cybersecurity', 'AWS Academy Graduate - Cloud Foundations', 'Certificate of Participation in Vista of CodeFest\'26', 'Certificate of Participation in Ideation Phase of Hacksagon 2026', 'Infosys (Software Eng)', 'Columbia', 'Cisco', 'Google', 'Anthropic', 'DeepLearning.AI'].map(s => (
               <span key={s} className="bg-green-900/50 border border-green-400 px-3 py-2 rounded text-xl text-yellow-100">{s}</span>
           ))}
        </div>
      </div>
    ),
    Pricing: (
      <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        <h2 className="text-4xl mb-4 text-green-300 drop-shadow-md">Mercenary Rates</h2>
        <p className="text-xl mb-6 italic text-gray-300">Base prices depending on project scope. No surprises.</p>
        
        <div className="space-y-6 text-xl">
          <div className="border border-white/30 p-4 rounded bg-black/40">
            <h3 className="text-2xl text-yellow-300 flex items-center"><Coins className="w-6 h-6 mr-3 text-yellow-500" /> Simple App [₹ 5,000+]</h3>
            <p className="mt-2 text-gray-300 ml-9">Landing pages, portfolios, small tools — clean & fast.</p>
          </div>
          
          <div className="border border-yellow-300 p-4 rounded bg-yellow-900/20">
            <h3 className="text-2xl text-yellow-300 flex items-center"><CircleDollarSign className="w-6 h-6 mr-3 text-green-400" /> Frontend + Basic Backend [₹ 10,000+]</h3>
            <p className="mt-2 text-gray-300 ml-9">Apps with user login, basic API & simple DB.</p>
          </div>

          <div className="border border-white/30 p-4 rounded bg-black/40">
            <h3 className="text-2xl text-yellow-300 flex items-center"><Gem className="w-6 h-6 mr-3 text-blue-300" /> Medium-Level App [₹ 15,000+]</h3>
            <p className="mt-2 text-gray-300 ml-9">Multi-page apps with auth, complex logic & API integration.</p>
          </div>

          <div className="border border-white/30 p-4 rounded bg-black/40">
            <h3 className="text-2xl text-yellow-300 flex items-center"><Crown className="w-6 h-6 mr-3 text-yellow-400" /> Full-Stack Production App [₹ 40,000+]</h3>
            <p className="mt-2 text-gray-300 ml-9">Complete A-Z web apps. Production-ready cloud architecture.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none p-4 md:p-10 z-50 flex items-end justify-center">
      <AnimatePresence mode="wait">
        {activeZone && (
          <motion.div 
            key={activeZone}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            // Apply backdrop-blur for glass effect alongside the retro styling
            className="w-[900px] max-w-full rpg-dialogue bg-black/80 backdrop-blur-sm p-8 pointer-events-auto max-h-[80vh] overflow-hidden relative"
          >
            {content[activeZone]}
            <div className="absolute bottom-4 right-6 text-2xl animate-pulse text-yellow-300">▼</div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Help Instructions Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none rpg-dialogue px-4 py-2 opacity-80 text-xl hidden md:block">
        <p>USE W,A,S,D + SPACE TO EXPLORE</p>
      </div>
    </div>
  )
}
