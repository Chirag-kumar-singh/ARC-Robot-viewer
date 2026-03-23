![screenshot](./docs/screenshot.png)

---

# Robot Viewer


[![Three.js](https://img.shields.io/badge/Three.js-0.163.0-black.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646cff.svg)](https://vitejs.dev/)
[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen.svg)](http://viewer.robotsfan.com/)

**Robot Viewer** is a web-based 3D viewer for robot models and scenes. Built on top of [Three.js](https://threejs.org/), it provides an intuitive interface for visualizing, editing, and simulating robots directly in the browser without any installation required. This tool helps you visualize and analyze robot structures, joints, and physical properties.

**Live Demo** (All processing happens in your browser - your models never leave your device):


## Key Features

- **Format Support**: URDF, MJCF (Mujoco XML), USD (partial support)
- **Robot Types**: Serial robot structures (parallel robots not currently supported)
- **Visualization Tools**: Visual/collision geometry, inertia tensors, center of mass, coordinate frames, joint axes, shadows, coordinate system orientation
- **Interactive Controls**: Drag joints in real-time, adjust model poses
- **Measurement Tools**: Measure distances between joints and links with 3D visualization, display X/Y/Z axis projections and total distance, support ground height measurement
- **Code Editor**: Built-in CodeMirror editor with syntax highlighting and live preview
- **Scene Management**: File tree and scene graph visualization with hierarchical structure

## Getting Started

This project uses **pnpm**, but you can also use **npm** or **yarn**.

Clone the repository and install dependencies:

```bash
git clone 
cd robot_viewer
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

Output will be in the `dist/` directory.


