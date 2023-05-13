import React from "react";
import '../css/main.css';

const Main = ({ url, children }) => {
    return (
        <>
            <div className="search-bar">
                <div className="search-controls">
                    <img className="search-control back-control" alt="Back" />
                    <img className="search-control forward-control" alt="Forward" />
                    <img className="search-control reload-control" alt="Reload" />
                </div>
                <div className="text-search-bar">
                    https://www.best-portifolio-ever.com/{url}
                </div>
            </div>
            <div className="main-container">
                {children}
            </div>
        </>
    );
};

export default Main;