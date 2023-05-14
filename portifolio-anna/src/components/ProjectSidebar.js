import React from "react";

import SidebarLinks from "./SidebarLinks";
import SidebarSearch from "./SidebarSearch";
import { faBriefcase, faCompassDrafting, faUser, faFilm, faRectangleAd, faPhotoFilm, faFutbol, faArchway } from "@fortawesome/free-solid-svg-icons";

const ProjectSidebar = ({ onChange, changeType, types, highlights, changeTags, tags }) => {
    return (
        <div className="project-sidebar">
            <SidebarSearch onChange={onChange} />
            <SidebarLinks changeType={changeType} name="Highlights" icon={faFilm} active={highlights ? 1 : -1} />
            <hr />
            <SidebarLinks changeType={changeType} name="Drawings" icon={faCompassDrafting} active={types.indexOf("Drawings")} />
            <SidebarLinks changeType={changeType} name="Work" icon={faBriefcase} active={types.indexOf("Work")} />
            <SidebarLinks changeType={changeType} name="Personal" icon={faUser} active={types.indexOf("Personal")} />
            <hr />
            <SidebarLinks changeTags={changeTags} name="Advertisement" icon={faRectangleAd} tag={true} active={tags.indexOf("Advertisement")} />
            <SidebarLinks changeTags={changeTags} name="Fanart" icon={faPhotoFilm} tag={true} active={tags.indexOf("Fanart")} />
            <SidebarLinks changeTags={changeTags} name="Sports" icon={faFutbol} tag={true} active={tags.indexOf("Sports")} />     
            <SidebarLinks changeTags={changeTags} name="Urban" icon={faArchway} tag={true} active={tags.indexOf("Urban")} />            
        </div>
    );
};

export default ProjectSidebar;