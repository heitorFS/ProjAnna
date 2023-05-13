import React from "react";

const SidebarSearch = ({ onChange }) => {
    return (
        <>
            <div className="sidebar-search-container">
                <input onChange={onChange} type="search" placeholder="Type project name" />
            </div>
        </>
    );
};

export default SidebarSearch;