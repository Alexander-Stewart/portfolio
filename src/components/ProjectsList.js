import React, {Component} from 'react'
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
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>

    );
  }
}

export default ProjectsList
