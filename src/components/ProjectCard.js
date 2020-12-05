import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import PlaceHolder from '../logos/bxs-image.svg'

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <MDBView hover zoom>
        <Card className="bg-light text-white py-4 my-4" style={{ height: '10rem' }}>
          <Card.Img src={PlaceHolder} alt="" className="h-100 w-100"/>
          <Card.ImgOverlay className="p-0">
            <MDBMask overlay="black-light" className="p-3">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </MDBMask>
          </Card.ImgOverlay>
        </Card>
      </MDBView>
    );
  }
}

export default ProjectCard
