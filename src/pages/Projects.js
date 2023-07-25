import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project) => {
          return (
            <ProjectItem
            name={project.name} 
            image={project.image} 
            skills={project.skills}
            description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;