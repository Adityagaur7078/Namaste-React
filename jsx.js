import React from "react";
import ReactDOM from "react-dom/client";

// JSX is a syntax extension for JavaScript that allows us to write
// HTML-like (XML-like) code inside JavaScript.

// Important:
// JSX is NOT HTML.
// It only looks like HTML/XML, but it is actually JavaScript.

// Browsers cannot read JSX directly.
// JSX is transpiled into React.createElement() by a compiler
// (Parcel uses SWC/Babel).

// Example JSX:
// <h1 id="heading">Hello</h1>

// Internally becomes:
// React.createElement("h1", { id: "heading" }, "Hello");

// Flow:
// JSX → Babel transpiles → React.createElement() → React Element (JS Object) → HTML Element (DOM)


// -----------------------------
// React Element
// -----------------------------
// A React Element is a simple JavaScript object that describes what should appear on the screen.
// It is created using JSX or React.createElement.

const jsxHeading = (
  <h1 id="heading" className="color">
    Namaste React using JSX
  </h1>
);


// -----------------------------
// React Functional Component
// -----------------------------
// A Functional Component is a JavaScript function that returns JSX (React Elements).
// It is reusable and can contain logic.

// Example 1 (normal return)
const HeadingComponent1 = () => {
  return <h1 className="color" >This is from Functional Component 1</h1>;
};

// Example 2 (implicit return)
const HeadingComponent2 = () => (
  <h1>This is from Functional Component 2</h1>
);

// Example 3 (shortest)
const HeadingComponent3 = () => <h1>This is from Functional Component 3</h1>;


// -----------------------------
// Difference between React Element and Functional Component
// -----------------------------
// React Element:
// - It is a plain JavaScript object.
// - It represents UI.
// - It is not reusable like a function.
// - Example: const element = <h1>Hello</h1>

// Functional Component:
// - It is a JavaScript function.
// - It returns React Elements (JSX).
// - It is reusable and can contain logic.
// - Example: const Component = () => <h1>Hello</h1>




// component composition
// Component Composition means using one component inside another component.

const HeadingComponent = () => (
  <div className="red">
    <h1>This is from Functional Component </h1>
    <HeadingComponent1 />
  </div>
);







// Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// React can render only one root element at a time.
// If we call root.render() multiple times, the last call overrides the previous ones.

// root.render(<HeadingComponent1 />);
// root.render(<HeadingComponent2 />);
// root.render(<HeadingComponent3 />);
// root.render(jsxHeading);

// To render multiple elements together, we wrap them inside a single parent
// (like a div or React Fragment) and render that as one root.

// () => { ... }   → needs return
// () => ( ... )   → no return needed

const App = () => (
    <>
      {jsxHeading}
      <HeadingComponent1 />
      <HeadingComponent2 />
      <HeadingComponent3 />
      <HeadingComponent />

    </>
  );

root.render(<App />);