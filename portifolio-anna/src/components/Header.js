import React from "react";
import '../css/Header.css';

import HeaderTabs from './HeaderTabs';
import HeaderOperations from './HeaderOperations';

const Header = ({ ChangeTabs, CurrentPage }) => {
    return (
        <>        
            <div className="header">
                <div className="tabs-container">
                    <HeaderTabs ChangeTabs={ChangeTabs} CurrentPage={CurrentPage} to="Home">
                        <span>Home</span>
                    </HeaderTabs>
                    <HeaderTabs ChangeTabs={ChangeTabs} CurrentPage={CurrentPage} to="Projects">
                        <span>Projects</span>
                    </HeaderTabs>
                </div>
                <HeaderOperations />
            </div>
        </>
    );
};

export default Header;