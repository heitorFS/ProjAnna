import React from "react";

const CreateValues = (number) => {
    var ret = [];
    while (number > 0) {
        ret.push(
            <div className="point filter-pink">
                <img alt="Upgrade" />
            </div>
        )
        number --;
    }

    return ret;
}

const Attribute = ({ name, value }) => {    
    return (
        <>
            <div className="attr-name">{name}:</div>
            <div className="values">
                {CreateValues(value)}
            </div>
        </>
    );
};

export default Attribute;