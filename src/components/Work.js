import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as PlaceHolder} from '../logos/bxs-image.svg'

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Container className="p-5 w-100">
          <Row className="">
            <Col>
              <h1 className="text-center">Welcome to my corner of the web!</h1>
              <h1 className="text-center">IDK WHAT TO PUT HERE!!!</h1>
            </Col>
          </Row>
          <Row className="">
            <Col>
              This is where my cards will go!
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work
