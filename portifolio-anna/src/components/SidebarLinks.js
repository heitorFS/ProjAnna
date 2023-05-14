import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLinks = ({ name, icon, tag, changeType, changeTags, active }) => {
    return (
        <>
            <button onClick={!tag ? () => changeType(name) : () => changeTags(name)} className={`projects-link ${tag ? 'tag' : ''} ${active > -1 ? 'active' : ''}`}>
                <FontAwesomeIcon className="project-sidebar-icon" icon={icon} />
                {name}
            </button>
        </>
    );
};

export default SidebarLinks;