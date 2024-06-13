import React, { Component } from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {id: "heading"}, "Akarsh is here");
console.log(heading);

// JSX Heading 
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
console.log(jsxHeading);

// React Functional Component 
const FunctionalHeading = () => <h1 id="heading">Hello from Functional Component</h1>;
const FunctionalHeading2 = () => (
    <div>
        <FunctionalHeading />
        <h1 id="heading">Hello from Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading2 />);