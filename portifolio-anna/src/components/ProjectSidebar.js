import React from "react";

import SidebarLinks from "./SidebarLinks";
import SidebarSearch from "./SidebarSearch";
import { faBriefcase, faCompassDrafting, faUser, faFilm, faPersonCane, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const ProjectSidebar = ({ onChange, changeType, types }) => {
    return (
        <div className="project-sidebar">
            <SidebarSearch onChange={onChange} />
            <SidebarLinks name="Highlights" icon={faFilm} />
            <hr />
            <SidebarLinks changeType={changeType} name="Drawings" icon={faCompassDrafting} active={types.drawings} />
            <SidebarLinks changeType={changeType} name="Work" icon={faBriefcase} active={types.work} />
            <SidebarLinks changeType={changeType} name="Personal" icon={faUser} active={types.personal} />
            <hr />
            <SidebarLinks name="Vintage" icon={faPersonCane} tag={true} />
            <SidebarLinks name="Futuristic" icon={faUserAstronaut} tag={true} />            
        </div>
    );
};

export default ProjectSidebar;