# Namaste React 🚀

A focused learning repo to understand how React works internally:
**DOM → React.createElement() → JSX → Components**

---

## ⚙️ Run the Project

```bash
git clone https://github.com/Adityagaur7078/Namaste-React.git
cd Namaste-React
npm install
npm start
```

Open: [http://localhost:1234](http://localhost:1234)

### Run Small Project

```bash
npm run small
```

---

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

## 📁 Project Structure

```
Namaste React/
├── index.html   (controls which file runs (jsx.js or app.js))
├── jsx.js       (JSX + components learning)
├── app.js       (React.createElement practice)
├── style.css
├── package.json
└── Small Project/
    ├── index.html
    ├── webpage.js
    └── style.css
```

---

## ⚠️ Important Notes

- `npm start` runs the project using **index.html** as the entry file
- The `<script type="module" src="...">` inside index.html decides which JavaScript file is executed (e.g., `jsx.js` or `app.js`)
- `npm run small` runs the separate project inside the **Small Project** folder
- Parcel always runs the file that you specify as the entry point

---

## 👨‍💻 Author

Aditya Gaur
[https://github.com/Adityagaur7078](https://github.com/Adityagaur7078)