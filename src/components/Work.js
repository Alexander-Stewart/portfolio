import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as PlaceHolder} from '../logos/bxs-image.svg'
import ProjectsList from './ProjectsList.js'

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Container className="p-5 w-100">
          <Row className="py-4">
            <Col>
              <h1 className="text-center display-1 d-none d-md-block">Hey! I'm Anon. Vibe in my space for awhile.</h1>
              <h1 className="text-center d-block d-md-none">Hey! I'm Anon. Vibe in my space for awhile.</h1>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <ProjectsList/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work
