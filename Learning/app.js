// *** Testing ***


// const heading = React.createElement("h1", { className: "color" }  , "This is React form app.js");

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);






// Learn How to Create this type of HTML Structure with React 


// <div id="parent">
//     <div id="child1">
//         <h1>This is Heading 1</h1>
//         <h2>This is Heading 2</h2>
//     </div>

//     <div id="child2">
//         <h1>This is Heading 1</h1>
//         <h2>This is Heading 2</h2>
//     </div>
// </div> 





// Import react and react-DOM from node_modules

import React from "react"
import ReactDOM from "react-dom/client"


// React.createElement() creates a React element (a JavaScript object), and ReactDOM renders that object into a real HTML DOM element in the browser.


const container = React.createElement(
    "div",
    { id: "parent", className: "color" },
    [
        React.createElement(
            "div",
            { id: "child1", key: "child1" },
            [
                React.createElement("h1", { key: "h1-1" }, "This is Heading 1"),
                React.createElement("h2", { key: "h2-1" }, "This is Heading 2")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2", key: "child2" },
            [
                React.createElement("h1", { key: "h1-2" }, "This is Heading 1"),
                React.createElement("h2", { key: "h2-2" }, "This is Heading 2")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);