import React from "react";
const HeaderTabs = ({to, children, Options}) => {
    return (
        <div onClick={() => Options.ChangeTabs(to)}>
            <div className={`tab ${Options.state.currentPage === to ? 'active' : ''}`}>
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