import React from "react";

import Project from "./Project";

const ProjectResult = ({ projects, openProject }) => {
    return (
        <div className="results">
            {projects.map(project => {
                return (
                    <Project project={project} openProject={openProject} />
                )
            })}
        </div>
    );
};

export default ProjectResult;