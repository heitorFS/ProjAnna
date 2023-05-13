import React from "react";
import '../css/Project.css';

import ProjectSidebar from "./ProjectSidebar";
import ProjectResult from "./ProjectResult";

import { projects } from "../projects";

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            type: {
                drawing: false,
                work: false,
                personal: false
            }
        };
    }

    changeType = (prop) => {
        switch (prop) {
            case 'Drawing':
                this.setState({drawing: !this.state.type.drawing});
                break;
            
            case 'Work':
                this.setState({work: !this.state.type.work});
                break;

            default:
                this.setState({personal: !this.state.type.personal});
                break;
        }
    }

    searchOnChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render () {
        const filteredProjects = projects.filter(project => {
            return project.title.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return(
            <div className="project-grid">
                <ProjectSidebar types={this.state.type} changeType={this.changeType} onChange={this.searchOnChange} />
                <ProjectResult props={this.state} projects={filteredProjects} />
            </div>
        )
    }
};

export default Projects;