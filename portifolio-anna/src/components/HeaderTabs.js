import React from "react";
const HeaderTabs = ({to, children, ChangeTabs, CurrentPage}) => {
    return (
        <div onClick={() => ChangeTabs(to)}>
            <div className={`tab ${CurrentPage.includes(to) ? 'active' : ''}`}>
                <div>
                    {children}
                </div>
                <div className="align-right">
                    X
                </div>
            </div>
        </div>
    );
};

export default HeaderTabs;