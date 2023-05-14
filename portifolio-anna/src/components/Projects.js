import React from "react";
import '../css/Project.css';

import ProjectSidebar from "./ProjectSidebar";
import ProjectResult from "./ProjectResult";
import ProjectModal from "./ProjectModal";

import { projects } from "../projects";

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            type: [],
            tags: [],
            highlights: false,
            currentModal: (<></>)
        };
    }

    changeTags = (prop) => {
        console.log(prop);
        console.log(this.state.tags)
        const indexOfProp = this.state.tags.indexOf(prop);
                var newTags = this.state.tags;
        
                if (indexOfProp > -1) {
                    newTags.splice(indexOfProp, 1);
                }
                else {
                    newTags.push(prop);
        
                }        
                this.setState({tags: newTags})
    }

    changeType = (prop) => {        
        switch (prop) {
            case "Highlights":
                this.setState({highlights: !this.state.highlights})
                break;
            default:
                const indexOfProp = this.state.type.indexOf(prop);
                var newTypes = this.state.type;
        
                if (indexOfProp > -1) {
                    newTypes.splice(indexOfProp, 1);
                }
                else {
                    newTypes.push(prop);
        
                }        
                this.setState({types: newTypes})
                break;
        }
    }

    searchOnChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render () {
        const filteredProjects = projects.filter(project => {
            if (this.state.highlights) {
                return  project.title.toLowerCase().includes(this.state.search.toLowerCase()) &&
                        project.highlight &&
                        (this.state.type.includes(project.type) || !this.state.type.length) &&
                        (this.state.tags.some(i => project.tags.includes(i)) || !this.state.tags.length);
            }

            return project.title.toLowerCase().includes(this.state.search.toLowerCase()) &&
                   (this.state.type.includes(project.type) || !this.state.type.length) &&
                   (this.state.tags.some(i => project.tags.includes(i)) || !this.state.tags.length);
        });

        const closeModal = () => {
            this.setState({currentModal: (<></>)});
        }

        const openProject = (project) => {
            this.setState({currentModal: (<ProjectModal project={project} closeModal={closeModal} />)});
        }

        return(
            <div className="project-grid">
                <ProjectSidebar tags={this.state.tags} types={this.state.type} highlights={this.state.highlights} changeTags={this.changeTags} changeType={this.changeType} onChange={this.searchOnChange} />
                <ProjectResult props={this.state} projects={filteredProjects} openProject={openProject} />
                {this.state.currentModal}
            </div>
        )
    }
};

export default Projects;