# Namaste React 🚀

This repository contains my learning progress while studying **React.js** from the **Namaste React** course by Akshay Saini.

The goal of this repository is to understand how React works internally, starting from basic JavaScript DOM manipulation to building React applications.

---

## ⚙️ How to Run the Project

Clone the repository:

```bash
git clone https://github.com/Adityagaur7078/Namaste-React.git
```

Move into the project folder:

```bash
cd Namaste-React
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx parcel index.html
```

Then open:

```
http://localhost:1234
```

---

## 📦 Parcel

Parcel is a **zero‑configuration build tool for web applications**. It helps developers bundle HTML, CSS, JavaScript and other assets and run projects easily during development and production.

### Zero configuration
Parcel works without complicated setup. You can start with a simple HTML file and Parcel automatically detects JavaScript, CSS, images and other assets used in the project.

### Dev server
Parcel includes a **built‑in development server**. Running `parcel index.html` starts a local server (usually `http://localhost:1234`) so you can preview your project in the browser.

### Hot reloading
When you edit your code, Parcel automatically updates the browser without manually refreshing the page. This helps developers see changes instantly.

### Diagnostics
Parcel shows clear error messages in both the **terminal and browser**. It highlights the exact file and line where the error occurred and sometimes suggests how to fix it.

### Fast performance
Parcel builds projects very quickly by using **multi‑core processing and caching** so unchanged files are not rebuilt again.

### Reliable caching
All build steps are cached. When you restart the dev server, Parcel only rebuilds files that changed which makes development faster.

### Production optimization
When you build the project for production, Parcel automatically optimizes the application by minifying code, removing unused code, and improving performance.

### Tree shaking
Parcel analyzes imports and exports in your code and removes unused functions or modules so the final bundle size becomes smaller.

### Minification
JavaScript, CSS, HTML and SVG files are automatically compressed to reduce file size for faster loading in the browser.

### Image optimization
Parcel can automatically optimize images by resizing or converting them to more efficient formats.

### Code splitting
If multiple parts of your application share the same dependency, Parcel separates it into a common bundle so browsers can cache it and load the application faster.

### Content hashing
Parcel adds unique hashes to output filenames so browsers cache files safely and only download new versions when content changes.

### Transpilation
Parcel automatically transpiles modern JavaScript and CSS based on the **browserslist** configuration so the application works across different browsers.

---

## 👨‍💻 Author

**Aditya Gaur**

GitHub:  
https://github.com/Adityagaur7078