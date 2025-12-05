> **🚨 IMPORTANT: Development History Only**  
> This documents how the frontend was **originally created from scratch**.  
> **If cloning this project → STOP HERE and follow only `00-clone-and-run.md` + `01-setup.md`**  
> **Final app: Frontend runs on port 3000, Backend on 5000**

> This document covers setting up the frontend using **React + TypeScript** with **Vite**, and cleaning up the boilerplate files for a fresh start.

## 0: Install Node.js

Install [Node.js](https://nodejs.org/en/download/) on your system.  
Without Node.js, you **cannot run JavaScript or TypeScript locally**. [attached_file:1]

# 01: Creating a React + TypeScript Frontend App with Vite

**1. Creating two folders in the Project folder**

- `frontend`
- `backend`

---

**2. Frontend & Auth Setup**

> **Setting up workplace environment**
- Open terminal in the project folder, go to the **frontend directory** by using `cd frontend`. Then type `npm create vite@latest .` (that dot creates Vite in the current folder).
- Choose `React` and then `TypeScript` for the frontend 
- Run `npm i` OR `npm install`. Then `npm run dev`.
- App opens at `http://localhost:5173/`.

> **After installation - clean the starter files**
Inside `src` folder:
- Delete `assets` folder (default SVG logo)
- Delete `App.css`
- Clear all styles in `index.css`
- In `App.tsx`, keep only:

```tsx
function App() {
  return (
    <>
      <h1>Welcome</h1>
    </>
  )
}
export default App;
```

**Now `http://localhost:5173/` shows clean "Welcome" message.**

---

**3. Setting up Tailwind CSS v3**

- Follow: `https://v3.tailwindcss.com/docs/guides/vite` **(skip step 1)**
- In **frontend terminal**:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

**`tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


**`src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


---

**4. Checking TailwindCSS**

- `npm run dev`
- Stop existing process: **Ctrl+C (Windows)** / **Cmd+C (Mac)**
- Install **Tailwind CSS IntelliSense** extension

---

**5. Setting up Shadcn UI**

- Follow: `https://ui.shadcn.com/docs/installation/vite` **(skip step 1)**
- Check GitHub commits: `https://github.com/Beniel05/Spotify`

```bash
npx shadcn@latest init
npm install -D tailwindcss@3 postcss autoprefixer
```


**6. Install Clerk (Frontend)**

- [clerk.com](https://clerk.com) → New project: **"Spotify Clone"**
- Copy **Publishable Key**
- Follow: [Clerk React guide](https://clerk.com/docs/quickstarts/react) **(skip step 1)**
- Check GitHub commits for exact changes

---

## Next Steps

⬅️ [Clone & Run](./00-clone-and-run.md) | ➡️ [Project Overview](./01-setup.md)

**Frontend Development history complete!**
