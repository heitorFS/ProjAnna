import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({project, closeModal}) => {
    var index = 0;
    const changeImage = (event, ret) => {
        console.log(event)
        if (ret) {
            if (index === 0) {
                index = project.content.length - 1;
            }
            else {
                index--;
            }            
        }
        else {
            if (index === project.content.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
        }
        document.getElementsByClassName("modal-carrousel")[0].src = require(`../media/projects/${project.content[index]}`);
    }
    return (
        <div className="project-modal">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-title">{project.title}</div>
                    <div className="modal-operations">
                        <FontAwesomeIcon className="modal-close" onClick={closeModal} icon={faX} />
                    </div>
                </div>
                <div className="modal-body">
                    {
                        project.content.length === 1 ? 
                            <img alt="images" className="modal-carrousel" src={require(`../media/projects/${project.content[0]}`)} /> :
                            <><div className="modal-carrousel-buttons-container"><FontAwesomeIcon onClick={(event) => changeImage(event, true)} className="modal-carrousel-button" icon={faChevronLeft} /></div><img alt="images" className="modal-carrousel" src={require(`../media/projects/${project.content[0]}`)} /><div className="modal-carrousel-buttons-container"><FontAwesomeIcon onClick={(event) => changeImage(event, false)} className="modal-carrousel-button" icon={faChevronRight} /></div></>
                        }
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;