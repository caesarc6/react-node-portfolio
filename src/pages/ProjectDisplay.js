import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {

  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt= 'Preview of Project' />
      <p className="spacing-text">
        {project.description}
      </p>
      <p >
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <a href={project.sitelink} target="_blank" rel="noopener noreferrer"><LanguageIcon /></a>
    </div>
  );
}

export default ProjectDisplay;