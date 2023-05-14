import React from "react";

const Project = ({ project, openProject }) => {
    return (
        <div onClick={() => openProject(project)} className="project-card">
            <div className="project-card-container">
                <div className="project-cover-container">
                    <img className="project-cover" alt={project.title} src={require(`../media/projects/${project.cover}`)} />
                </div>
                <div className="project-title">
                    {project.title}
                </div>
            </div>
        </div>
    )
};

export default Project;