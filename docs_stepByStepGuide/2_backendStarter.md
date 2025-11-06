## 0: Initializing package.json in the backend folder

- Open a new terminal and go to the backend directory by using `cd backend`
- Then type this, `npm init -y`
- Then, `npm i express mongoose dotenv cloudinary cors @clerk/express socket.io`

**Installed Packages Overview**
> express – A fast and minimal Node.js framework used to build your backend API routes (like /auth, /messages, /songs, etc.).

> mongoose – A MongoDB library that makes it easy to define schemas and interact with your database (for users, messages, playlists, etc.).

> dotenv – Loads environment variables from a .env file so you can securely store keys like MONGO_URI, CLOUDINARY_URL, or CLERK_SECRET_KEY.

> cloudinary – Handles image and media uploads (like profile pictures, album covers, or playlist thumbnails) and stores them in the cloud.

> cors – Enables secure communication between your frontend (React app) and backend (Express API) running on different ports.

> @clerk/express – Adds Clerk authentication support to your backend, allowing you to protect routes and verify logged-in users.

> socket.io – Enables real-time features such as live chat and “now listening” status updates between users.

- These packages let your backend store data (MongoDB), handle authentication (Clerk), upload media (Cloudinary), and enable real-time messaging (Socket.io) — all while staying connected to your frontend (Vite + Tailwind v3) securely.

---

**1.Adding `Nodemon` for Auto-Restart**

- Install nodemon `npm i -D nodemon` in the terminal.
- Nodemon automatically restarts your Node.js server whenever you save a file.
- It’s used only during development, not in production — that’s why you install it with the -D flag (as a dev dependency).