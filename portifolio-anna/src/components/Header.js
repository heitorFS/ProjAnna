import React from "react";
import '../css/Header.css';

import HeaderTabs from './HeaderTabs';
import HeaderOperations from './HeaderOperations';

const Header = ({ Options }) => {
    return (
        <div className="header">
            <div className="tabs-container">
                <HeaderTabs Options={Options} to="Home">
                    <span>Home</span>
                </HeaderTabs>
                <HeaderTabs Options={Options} to="Projects">
                    <span>Projects</span>
                </HeaderTabs>
            </div>
            <HeaderOperations />
        </div>
    );
};

export default Header;