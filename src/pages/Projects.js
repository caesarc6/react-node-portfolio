import React from 'react';
import ProjectItem from '../components/ProjectItem';
// import Proj1 from '../assets/Proj1.jpg';
// import Proj2 from '../assets/Proj2.PNG'; 
// import Proj3 from '../assets/Proj3.jpg';
import { ProjectList } from '../helpers/ProjectList';


import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index ) => {
          return (
          <ProjectItem 
            key={index}
            id={index} 
            name={project.name} 
            image={project.image} />
          );
        })}        
      </div>
    </div>
    );
}

export default Projects;