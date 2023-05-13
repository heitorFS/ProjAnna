import React from "react";

const Project = ({ project }) => {
    var loop;
    var i = 0;
    const renderImage = (event) => {
        if (i === project.content.length - 1)
            i = 0;
        else
            i++;

        console.log(event.target)

        if (event.target.className === 'project-cover-container') {
            event.target.children[0].src = require(`../media/projects/${project.content[i]}`);
        }
        else if(event.target.className === 'project-cover') {
            event.target.src = require(`../media/projects/${project.content[i]}`);
        }
        else {
            event.target.children[0].children[0].src = require(`../media/projects/${project.content[i]}`);
        }
    }

    const stopCarrousel = () => {
        clearInterval(loop);
    }

    const carrousel = (event) => {
        if (project.content.length === 0)
            return;

        loop = setInterval(() => renderImage(event), 1500);
    };

    return (
        <div onMouseEnter={carrousel} onMouseLeave={stopCarrousel} className="project-card">
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