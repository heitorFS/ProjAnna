import React from "react";

import Project from "./Project";

const ProjectResult = ({ projects }) => {
    return (
        <div className="results">
            {projects.map(project => {
                return (
                    <Project project={project} />
                )
            })}
        </div>
    );
};

export default ProjectResult;