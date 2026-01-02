# Altaric — Official Website

Altaric is a modern, AI-driven technology platform built to showcase intelligent digital solutions, industry expertise, and innovation-led services.  
This repository contains the complete source code for the Altaric website, developed using a decoupled full-stack architecture.

---

## 🌐 Live Website
👉 https://www.altaric.com/

---

## 🧱 Architecture Overview

The application follows a **client–server architecture** with a separately deployed frontend and backend.

User Browser
↓
Frontend (React + Vite) — Vercel
↓ HTTPS / REST APIs
Backend (FastAPI) — Render
↓
Application Database


---

## 🖥️ Frontend

**Tech Stack**
- React.js
- Vite
- Styled-components
- Framer Motion
- React Router

**Responsibilities**
- UI rendering and animations
- Client-side routing
- Form handling
- API communication with backend
- Responsive design across devices

**Hosting**
- Platform: **Vercel**
- Deployment type: Static frontend with CDN
- Automatic builds and deployments on Git push
- HTTPS enabled by default

---

## ⚙️ Backend

**Tech Stack**
- FastAPI (Python)
- Uvicorn (ASGI server)
- SQLAlchemy (ORM)

**Responsibilities**
- Business logic processing
- Contact and career form handling
- Email notifications
- Database interactions
- CORS and security configuration

**Hosting**
- Platform: **Render**
- Persistent backend service
- Environment variable support
- Auto-restart and logging

---

## 🗄️ Database

- Stores contact submissions and career applications
- Connected securely via backend
- Credentials managed using environment variables
- Easily scalable and replaceable

---

## 🚀 Deployment Workflow

### Frontend (Vercel)
1. Code pushed to Git repository
2. Vercel automatically builds the project
3. Optimized static assets deployed globally
4. Changes go live instantly

### Backend (Render)
1. Backend code pushed to repository
2. Render installs dependencies
3. FastAPI server starts using Uvicorn
4. APIs become available over HTTPS

---

## 🔐 Environment Configuration

Sensitive configuration is managed via environment variables:
- API endpoints
- Database credentials
- SMTP configuration
- Frontend URL (for CORS)

This ensures security and flexibility across environments.

---

## 🔒 Security Considerations

- HTTPS enforced for all traffic
- CORS restricted to frontend domain
- No sensitive credentials in source code
- Input validation on backend APIs

---

## 📈 Scalability & Performance

- Frontend served via global CDN
- Backend designed for horizontal scaling
- Modular codebase for easy feature expansion
- Optimized builds and lightweight API responses

---

## 🛠️ Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```



## 🔮 Future Enhancements

Authentication & user dashboards

Admin panel for content management

CI/CD pipelines

Analytics and monitoring

Expanded AI service integrations



## 📄 License

This project is proprietary and owned by Altaric.
Unauthorized use or redistribution is not permitted.


###👤 Maintained By

Altaric Engineering Team
