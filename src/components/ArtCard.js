import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {MDBMask, MDBView} from 'mdbreact';
import {Link} from 'react-router-dom'
import PlaceHolder from '../logos/bxs-image.svg'

class ArtCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <Link to={{
                pathname: `/art/${this.props.art.id}`,
                projectProps: {
                  project: this.props.project
                }
               }}>
        <MDBView hover className="shadow-sm">
          <Card className="bg-light text-white my-4" style={{}}>
            <Card.Img src={this.props.project.cardImage} alt="" className="w-100 h-100" fluid/>
            <Card.ImgOverlay className="p-0">
              <MDBMask overlay="black-strong" className="p-3 d-flex flex-column">
                <Card.Title className="text-center">{this.props.project.projectTitle}</Card.Title>
                <Card.Text className="text-center">
                  {this.props.project.subtitle}
                </Card.Text>
              </MDBMask>
            </Card.ImgOverlay>
          </Card>
        </MDBView>
      </Link>
    );
  }
}

export default ArtCard
