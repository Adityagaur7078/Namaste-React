# Namaste React 🚀

A focused learning repo to understand how React works internally:
**DOM → React.createElement() → JSX → Components**

---

## ⚙️ Run the Project

## 🧠 How This Project Runs

`index.html` is the entry file used by Parcel.

Inside it, you control which file runs:

```html
<script type="module" src="./jsx.js"></script>
```

or

```html
<script type="module" src="./app.js"></script>
```

👉 Change the `src` to switch between **JSX learning (jsx.js)** and **React.createElement practice (app.js)**.

```bash
git clone https://github.com/Adityagaur7078/Namaste-React.git
cd Namaste-React
npm install
npm run start:learning
```

Open: [http://localhost:1234](http://localhost:1234)

---

### Run Small Project

```bash
npm run start:small
```

---

## 📦 Parcel (Clear Explanation)

Parcel is a **zero-configuration build tool**.

### What Parcel does for you

* Starts a **dev server** → [http://localhost:1234](http://localhost:1234)
* **Bundles** your files (HTML, CSS, JS)
* Supports **ES Modules (import/export)**
* Converts JSX using **SWC/Babel**
* Enables **hot reloading** (auto refresh)
* Shows **clear error messages**
* Uses **caching** → faster rebuilds
* Uses **multi-core processing** → fast builds

### In simple words

👉 You write code → Parcel processes → Browser understands it

---

## 🔧 Babel (JSX Magic)

Browsers cannot understand JSX directly.

Parcel uses Babel/SWC internally to convert it.

Example:

```js
<h1>Hello</h1>
// becomes
React.createElement("h1", null, "Hello")
```

---

## 🧠 Core Concepts Covered

### 1. React.createElement()

* Creates a **React Element (JS Object)**
* Rendered to DOM using ReactDOM

### 2. JSX

* Looks like HTML but is JavaScript
* Converted into React.createElement()

### Flow

```
JSX → React.createElement() → React Element → DOM
```

### 3. React Element vs Functional Component

* React Element → simple object (UI)
* Functional Component → function returning JSX

### 4. Component Composition

* Using components inside components

### 5. {} in JSX

* Used to run JavaScript inside JSX

Examples:

* `{100 + 300}` → 400
* `{name}` → variable
* `{true ? "Yes" : "No"}` → condition

---

## ⚠️ Important Notes

* `npm run start:learning` runs the project using **Learning/index.html** as the entry file
* The `<script type="module" src="...">` inside index.html decides which JavaScript file is executed (e.g., `jsx.js` or `app.js`)
* `npm run start:small` runs the separate project inside the **Small Project** folder
* Parcel always runs the file that you specify as the entry point

---

// --------------------------------------
// Types of Export and Import in JavaScript
// --------------------------------------

// 1️⃣ Default Export

// Export
`export default Component;`

// Import (no curly braces)
`import Component from "./path";`

// 2️⃣ Named Export

// Export
`export const name = "Aditya";`

// Import (must use curly braces)
`import { name } from "./path";`


---

# React Hooks
 (Normal JS utility functions)
- useState() // Superpowerful state Variables in react
- useEffect()

---

## 🔄 Reconciliation in React

Reconciliation is the process React uses to update the UI efficiently.

In simple words:
React compares the **old Virtual DOM** with the **new Virtual DOM**, finds the difference, and updates only what has changed in the real DOM.

---

## 🧠 Simple Understanding

React does not update the whole page. It updates only the part that actually changes.

Example:

**Before:**

```html
<h1>Hello Aditya</h1>
```

**After:**

```html
<h1>Hello World</h1>
```

React updates only the text (Aditya → World) instead of replacing the whole element.

---

## ⚙️ How Reconciliation Works

1. State or props change
2. React creates a new Virtual DOM
3. React compares it with the old Virtual DOM
4. Finds the difference
5. Updates only the changed part in the real DOM

---

## 🔄 Flow

State Change
↓
New Virtual DOM
↓
Reconciliation (Diffing)
↓
Update only changed parts
↓
Real DOM updated

---

## ⚡ Diffing Rules

1. Same element → update only content
   Example:

   ```html
   <h1>Hello</h1> → <h1>World</h1>
   ```

2. Different element → replace completely
   Example:

   ```html
   <h1>Hello</h1> → <p>Hello</p>
   ```

---

## 🎯 One Line Definition

Reconciliation is the process where React compares old and new Virtual DOM and updates only the changed parts in the real DOM.

---

## 💡 Summary

Reconciliation makes React fast by:

* Minimizing DOM updates
* Improving performance
* Updating only necessary parts


---

## 👨‍💻 Author

Aditya Gaur
[https://github.com/Adityagaur7078](https://github.com/Adityagaur7078)