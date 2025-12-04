# Frontend - React + Vite

## Overview
This is the frontend for the Veltris Website, built using **React** with **Vite** as the build tool.  
It includes a modern UI with components, animations (Framer Motion, GSAP), 3D elements (React Three Fiber), and routing (React Router).

---

## Prerequisites
- Node.js 18+  
- npm (or yarn)  

---

## Folder Structure

```

frontend/
├── public/                  # Static files like index.html, favicon, etc.
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # React components
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global CSS
│   └── App.css              # App-level CSS
├── package.json             # Project dependencies
├── package-lock.json        # Dependency lockfile
├── vite.config.js           # Vite configuration
└── .gitignore

````

---

## Setup Instructions

1. **Navigate to frontend folder**
```bash
cd frontend
````

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables** (if applicable)

* If your frontend needs API URLs or keys, create a `.env` file based on `.env.example`:

```
VITE_API_BASE_URL=http://localhost:8000
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

* The app will run at `http://localhost:5173` (default Vite port)

5. **Build for production**

```bash
npm run build
# or
yarn build
```

* Production-ready files will be in the `dist/` folder

6. **Preview production build**

```bash
npm run preview
# or
yarn preview
```

---

## Notes

* Ensure the backend is running (FastAPI on port 8000) for API calls.
* Frontend uses:

  * **React Router** for routing
  * **Framer Motion** & **GSAP** for animations
  * **React Three Fiber** for 3D components
  * **Styled Components** for styling
* To add new components, place them under `src/components` and import them in `App.jsx` or relevant parent components.

---

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start development server    |
| `npm run build`   | Build for production        |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint for code linting |
