import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLinks = ({ name, icon, tag, changeType, active }) => {
    return (
        <>
            <button onClick={() => changeType(name)} className={`projects-link ${tag ? 'tag' : ''} ${active ? 'active' : ''}`}>
                <FontAwesomeIcon className="project-sidebar-icon" icon={icon} />
                {name}
            </button>
        </>
    );
};

export default SidebarLinks;