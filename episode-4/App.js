import React from "react";
import ReactDOM from "react-dom";
import Image from "./assets/logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-name">
                <img 
                    src={Image}
                    alt="company-logo"
                    className="logo"
                /> 
                <h1>King's Burger</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="item">Home</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                    <li className="item">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);