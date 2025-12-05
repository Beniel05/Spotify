# How to clone and run this project locally

This guide explains how to clone the repository, set up environment variables, and run both the backend and frontend locally.

## 1. Prerequisites

Before you start, make sure you have:

- Node.js (v14 or newer) and npm installed.
- Git installed.
- A MongoDB instance (local or hosted, e.g. MongoDB Atlas) for `MONGODB_URI`.
- A Cloudinary account and API keys.
- A Clerk project (for authentication) with publishable and secret keys.

## 2. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/Beniel05/Spotify.git
cd Spotify
```


The repository contains:

- `backend/` – Node.js/Express server (with MongoDB, Clerk, Cloudinary, and Socket.IO usage).
- `frontend/` – Vite + React client.

## 3. Install dependencies

```bash
cd backend
npm install
```
after the installation;

```bash
cd ../frontend
npm install
```


## 4. Configure backend environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=your_clerk_logged_in_email@gmail.com
NODE_ENV=development

CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

- You have to fill all that right side of the equals to with your own credentials (without any spaces)


**Fixed:** PORT=5000,
Proper `.env` code block - don't add any spaces between the same line (not even for equals to sign "=").

## 5. Configure frontend environment variables

Create a `.env` file inside the `frontend` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```


**Fixed:** `.env` code block. Just put your clerk publishable key there!

## 6. Run the backend

```bash
cd backend
npm run dev
```


Backend runs on `http://localhost:5000`.

## 7. Run the frontend

```bash
cd frontend
npm run dev
```


Frontend runs on `http://localhost:3000`.

## 8. Open the app

1. Visit `http://localhost:3000` in your browser.
2. Sign in with Clerk.
3. Use the app features.
