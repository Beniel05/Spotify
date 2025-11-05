> This document covers setting up the frontend using **React + TypeScript** with **Vite**, and cleaning up the boilerplate files for a fresh start.

## 0: Install Node.js

Install [**Node.js**](https://nodejs.org/en/download/) on your system.  
Without Node.js, you **cannot run JavaScript or TypeScript locally**.

# 01: Creating a React + TypeScript Frontend App with Vite
> This document covers setting up the frontend using **React + TypeScript** with **Vite**, and cleaning up the boilerplate files for a fresh start.

**1. Creating two folders in the Project folder**

- `frontend`
- `backend`

--- 

**2. Frontend & Auth Setup**

> **Setting up workplace environment**
- Open terminal in the project folder, go to the frontend director by using `cd frontend`. Then type `npm create vite@latest .` that dot in the end - creates the vite in the current folder 'frontend directory'.
- Choose `React` and then `TypeScript` for the frontend 
- And run `npm i` OR `npm install`. Then after that, `npm run dev`.
- This will open your app in the browser at `http://localhost:5173/`.

> **After installation - clean the starter files**
Inside the src folder:
- Delete the assets folder (contains the default SVG logo).
- Delete App.css
- Clear all styles inside index.css.
- In App.tsx, remove all imports and existing code, keeping only the function and fragment:

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

- Now open `http://localhost:5173/` — it should display a plain “Welcome” message with no pre-defined styles, just a clean React + TypeScript setup.

---

**3. Setting up Tailwindcss**

- We're using v3 Tailwind in this project.
- Go to this website `https://v3.tailwindcss.com/docs/guides/vite`
- As we already create a vite project - we can skip the first step. You can directly write the below in the **terminal** within the **frontend directory**

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
``` 

- Copy the code below and paste it in the **tailwind.config.js** file. Remove the existing lines.

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

- Copy - Paste the below code in `index.css` file in the `src` folder,
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

**4. Checking TailwindCSS**

- Run the code by using `npm run dev` in the terminal. 
- If there is any ongoing process - terminate the terminal by using `Ctrl C` in windows / `Command C` in mac.
- Use the extension `Tailwind CSS IntelliSense` for auto recommendation of pre-defined tailwind styles when you're writing styles

---

**5. Setting up Shadcn ui**

- Install the shadcn ui by this link `https://ui.shadcn.com/docs/installation/vite`
- Follow the documentation carefully and copy-paste the required code from the web to the correct files.
- Follow github commits of this project repository `https://github.com/Beniel05/Spotify` to get clear code of the set up of Shadcn UI 
