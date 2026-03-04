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





const container = React.createElement(
    "div",
    { id: "parent", className: "color" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "This is Heading 1"),
                React.createElement("h2", {}, "This is Heading 2")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "This is Heading 1"),
                React.createElement("h2", {}, "This is Heading 2")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);