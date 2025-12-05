# SPOTIFY CONNECT +

This is a full-stack Spotify-inspired web application that focuses on real-time interaction and a clean listening/chat experience. The app has a React (Vite) frontend and a Node.js/Express backend with MongoDB, Cloudinary, Clerk authentication, and real-time communication over sockets.

The goal of the project is to practice building a modern, production-style stack: separate frontend and backend, proper auth, database integration, and live updates.

---

## Features

- **Modern UI** – Vite + React frontend with a responsive layout.
- **Authentication with Clerk** – Secure sign-in/sign-up using Clerk, integrated both on frontend and backend.
- **MongoDB persistence** – Uses MongoDB (Mongoose) for storing application data.
- **Cloudinary integration** – Cloudinary is used to store and serve media assets (audio & images).
- **Real-time functionality** – Frontend connects to the backend via socket client for live updates and interactions.
- **Separated frontend & backend** – Clear separation of concerns with independent `frontend` and `backend` projects.

---

## Tech Stack

### Frontend
- **Framework**: React (bundled with Vite)
- **Language**: TypeScript
- **Authentication**: Clerk (`VITE_CLERK_PUBLISHABLE_KEY`)
- **Build tool / Dev server**: Vite

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: Clerk (`CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`)
- **Media storage**: Cloudinary (`CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_CLOUD_NAME`)
- **Environment management**: `.env`
- **Real-time**: Socket.io client/server for live events

---

## Project Structure

```
Spotify/            # Repo root
├─ frontend/        # Vite + React app
│ ├─ src/           # UI, pages, API calls, hooks, etc.
│ ├─ public/        # Static assets
│ ├─ package.json   # Frontend scripts and dependencies
│ └─ ...            # Vite / TS config
│
├─ backend/         # Node.js + Express server
│ ├─ src/           # Routes, controllers, services, socket setup
│ ├─ package.json   # Backend scripts and dependencies
│ └─ ...            # TS config / env setup
│
├─ docs_stepByStepGuide/      # Step-by-step documentation
│  ├─ 00-clone-and-run.md     # How to clone and run locally
│  ├─ 01-setup.md             # Project overview
│  ├─ 02-frontend-creation.md # Frontend from scratch
│  └─ 03-backend-creation.md  # Backend from scratch
└─ README.md # This file
```

## Quick Start

1. Clone: `git clone https://github.com/Beniel05/Spotify.git` && `cd Spotify`
2. Backend: `cd backend` && `npm install`
3. Frontend: `cd ../frontend` && `npm install`
4. Add `.env` files (see `docs_stepByStepGuide/00-clone-and-run.md`)
5. Backend: `cd backend && npm run dev` (port 5000)
6. Frontend: `cd frontend && npm run dev` (port 3000)
7. Open: `http://localhost:3000`

**Detailed setup →** `docs_stepByStepGuide/00-clone-and-run.md`
