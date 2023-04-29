import React from "react";

import HeaderOperation from './HeaderOperation';

const HeaderOperations = () => {
    return (
        <div className="header-operations">
            <HeaderOperation>
                _
            </HeaderOperation>
            <HeaderOperation>
                □
            </HeaderOperation>
            <HeaderOperation important>
                X
            </HeaderOperation>
        </div>
    );
};

export default HeaderOperations;