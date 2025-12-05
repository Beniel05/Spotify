> **🚨 IMPORTANT: Backend Development History**  
> Documents original backend creation (port 5000 via .env).  
> **Cloning? → Use `00-clone-and-run.md` + `01-setup.md` only!**

## Backend Setup from Scratch (Port 5000)

## 0: Initialize package.json

- Open a new terminal and go to the backend directory by using `cd backend`
- Then type this, `npm init -y`
- Then, `npm i express mongoose dotenv cloudinary cors @clerk/express socket.io`

**Installed Packages Overview**

> express – A fast and minimal Node.js framework used to build your backend API routes (like /auth, /messages, /songs, etc.).

> mongoose – A MongoDB library that makes it easy to define schemas and interact with your database (for users, messages, playlists, etc.).

> dotenv – Loads environment variables from a .env file so you can securely store keys like MONGODB_URI, CLOUDINARY_URL, or CLERK_SECRET_KEY.

> cloudinary – Handles image and media uploads (like profile pictures, album covers, or playlist thumbnails) and stores them in the cloud.

> cors – Enables secure communication between your frontend (React app) and backend (Express API) running on different ports.

> @clerk/express – Adds Clerk authentication support to your backend, allowing you to protect routes and verify logged-in users.

> socket.io – Enables real-time features such as live chat and “now listening” status updates between users.

- These packages let your backend store data (MongoDB), handle authentication (Clerk), upload media (Cloudinary), and enable real-time messaging (Socket.io) — all while staying connected to your frontend (Vite + Tailwind v3) securely.

---

**1.Adding `Nodemon` for Auto-Restart**

```bash
cd backend
npm init -y
npm i express mongoose dotenv cloudinary cors @clerk/express socket.io
npm i -D nodemon
```

- Nodemon automatically restarts your Node.js server whenever you save a file.
- It’s used only during development, not in production — that’s why you install it with the -D flag (as a dev dependency).


---
## Other few details:

> Module
- Add `"type": "module",` in the backend `package.json` file to use import statements.
- Create a PORT for your server and put it inside the .env file. And with the help of dotenv process the .env file inside the `index.js`

###### Purpose: Enables ES6 import/export syntax + loads environment variables.

> Run dev
- Add below in the `package.json` to run the backend with command
```js
"scripts": {
    "dev": "nodemon src/index.js"
}
```
###### Purpose: Creates npm run dev command to start backend with auto-restart.