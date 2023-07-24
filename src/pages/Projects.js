import React from 'react';
import '../styles/Project.css';
import ProjectItem from '../components/ProjectItem';
// import Proj1 from '../assets/proj1.jpg'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name='Social Media Website' image={Proj1}/>
        <ProjectItem name='Social Media Website' image={Proj1}/>
        <ProjectItem name='Social Media Website' image={Proj1}/>
        <ProjectItem name='Social Media Website' image={Proj1}/>
      </div>
    </div>
  );
}

export default Projects