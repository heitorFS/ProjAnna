import React from "react";
import '../css/main.css';

const Main = ({ children }) => {
    return (
        <div className="main-container">
            {children}
        </div>
    );
};

export default Main;