import React, {Component} from 'react'
import Projects from '../Projects.js'
import CardColumns from 'react-bootstrap/CardColumns'
import ProjectCard from './ProjectCard.js'
import PlaceHolder from '../logos/bxs-image.svg'

class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-around">
        {Object.values(Projects.projects).map(project =>
          <ProjectCard id={project.id} project={project}/>
        )}
      </div>

    );
  }
}

export default ProjectsList
