import React from "react";

const HeaderOperation = ({ important, children }) => {
    return (
        <div className={`operation ${important ? 'important' : ''}`}>
            {children}
        </div>
    );
};

export default HeaderOperation;