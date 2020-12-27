import React from 'react'
import ProjectSummary from './projectSummary'

const ProjectList = ({projects}) => { //projects undefined here!
  return (
    <div className="project-list section">
      <ProjectListComponent projects={projects} />
    </div>
  )
}

function ProjectListComponent(projects) {
  let projectItems;
  if (projects) {
    projectItems = projects.map(project => {
      <ListItem key={project.id} value={project} />
    });
  }
  return(
    { projectItems }
  );
}

function ListItem(key, project) {
  return (
    <ProjectSummary project={project} key={key} />
  )
}

export default ProjectList