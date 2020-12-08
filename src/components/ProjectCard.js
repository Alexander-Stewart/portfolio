import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {MDBMask, MDBView} from 'mdbreact';
import {Link} from 'react-router-dom'
import PlaceHolder from '../logos/bxs-image.svg'

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <Link to={{
                pathname: `/work/${this.props.project.id}`,
                projectProps: {
                  project: this.props.project
                }
               }}>
        <MDBView hover className="shadow-lg">
          <Card className="bg-light my-4 border-0" style={{ height: '10rem' }}>
            <Card.Img src={this.props.project.cardImage} alt="" className="w-100 h-100" fluid/>
            <Card.ImgOverlay className="p-0">
              <MDBMask overlay="black-strong" className="p-3 d-flex flex-column css-selector">
                <Card.Title>{this.props.project.projectTitle}</Card.Title>
                <Card.Text>
                  {this.props.project.subtitle}
                </Card.Text>
                <p className="text-right lead small em mt-auto mb-0">Learn More ></p>
              </MDBMask>
            </Card.ImgOverlay>
          </Card>
        </MDBView>
      </Link>
    );
  }
}

export default ProjectCard
