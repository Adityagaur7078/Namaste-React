import React from "react";
import ReactDOM from "react-dom/client";

// JSX is a syntax extension for JavaScript that allows us to write HTML-like (XML-like) code inside JavaScript.

// Important:
// JSX is NOT HTML.
// It only looks like HTML or XML-like syntax, but it is actually JavaScript that React understands.

// Browsers cannot read JSX directly.
// JSX is transpiled into React.createElement() by a compiler used by our build tool (Parcel uses SWC/Babel).

// Example JSX: <h1 id="heading">Hello</h1>

// Internally it becomes something like: React.createElement("h1", { id: "heading" }, "Hello");

// JSX → React.createElement() → React Element (JS Object) → HTML Element (rendered in DOM)

const jsxHeading = <h1 id="heading" className="color">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);