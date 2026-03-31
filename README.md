# Karthik 3D Portfolio

Interactive 3D portfolio built with React Three Fiber. Navigate a 3D world using keyboard controls (WASD/Arrow keys) to explore project zones, skills, and profile information through an immersive first-person experience.

## Architecture Overview

**Project Type:** React / Three.js / Vite single-page application

**High-Level Architecture:**

```
                        App (Root)
                          |
            +-------------+-------------+
            |             |             |
      KeyboardControls  Canvas       Sidebar
            |             |             |
            |     +-------+-------+    Zone Details
            |     |       |       |    (reactive panel)
            |   World   Zones   Player
            |   (3D      (trigger   (first-person
            |    scene)   areas)    controller)
            |     |
            |   Avatar
            |
      DialogueEngine
      (interaction system)
```

**Component Breakdown:**

| Component | Path | Responsibility |
|-----------|------|----------------|
| App | `src/App.jsx` | Root component with Canvas and keyboard mapping |
| World | `src/components/World.jsx` | 3D environment geometry, lighting, and materials |
| Player | `src/components/Player.jsx` | First-person camera controller with physics |
| Zones | `src/components/Zones.jsx` | Interactive trigger areas for portfolio sections |
| Sidebar | `src/components/Sidebar.jsx` | UI overlay showing zone content and details |
| Avatar | `src/components/Avatar.jsx` | 3D character model |
| Hero | `src/components/Hero.jsx` | Landing/intro section |
| Projects | `src/components/Projects.jsx` | Project showcase data and display |
| Skills | `src/components/Skills.jsx` | Technical skills visualization |
| DialogueEngine | `src/lib/DialogueEngine.js` | Scripted interaction and dialogue system |

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Language | JavaScript (JSX) |
| Framework | React 18 |
| 3D Engine | Three.js via React Three Fiber |
| 3D Helpers | React Three Drei (controls, loaders, helpers) |
| Post-processing | React Three Postprocessing |
| Animation | GSAP, Framer Motion |
| Styling | Tailwind CSS (via tailwind-merge, clsx) |
| Build Tool | Vite 5 |
| Icons | Lucide React, React Icons |

## Setup

```bash
git clone https://github.com/karthik-idikuda/karthik-3d-portfolio.git
cd karthik-3d-portfolio
npm install
```

## Running

```bash
npm run dev
```

Opens the development server. Navigate to the URL shown in the terminal. Use WASD or Arrow keys to move through the 3D world and explore portfolio zones.

## Build

```bash
npm run build
npm run preview
```

## Directory Structure

```
karthik-3d-portfolio/
  index.html              # Entry HTML
  package.json            # Dependencies and scripts
  vite.config.js          # Vite build configuration
  public/                 # Static assets
  src/
    App.jsx               # Root component
    main.jsx              # React DOM entry
    index.css             # Global styles
    assets/               # Images, models, textures
    components/
      Avatar.jsx          # 3D character
      Hero.jsx            # Intro section
      Player.jsx          # First-person controller
      Projects.jsx        # Project showcase
      Sidebar.jsx         # UI overlay panel
      Skills.jsx          # Skills visualization
      World.jsx           # 3D environment
      Zones.jsx           # Interactive trigger zones
    lib/
      DialogueEngine.js   # Interaction scripting
```

## License

This project is proprietary. All rights reserved.
