import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ReactComponent as PlaceHolder} from '../logos/bxs-image.svg'

class About extends Component {
  constructor(props) {
    super(props);
    // this class needs to be responsive!

    this.state = {};
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Container className="p-5">
          <Row className="">
            <Col>
              <PlaceHolder className="h-100 w-100"/>
            </Col>
            <Col>
              <h2>Let's vibe for a while!</h2>
              <p>Hey! I'm Alex Stewart (he/him), a fourth year student at
              Brown University.</p>
              <p>Concentrating in Computer Science and Visual Arts, I look to
              explore the intersection between creative and technical. Using
              my background in virtual reality and computer vision, I create
              immersive experiences both personally and professionally.
              </p>
              <p>
              Artistically, I create visual works that are nostalgic yet critical.
              Meshing old hardware such as film cameras with new digital editing techniques,
              I form conversation and comparsion between the present and past.
              </p>
              <p>
              Outside of my work, I also make music and DJ! If you need a vibe
              setter or help finding that perfect song to round out your playlist,
              you found the right person.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="px-5">
          <Row className="">
            <Col>
              <h2>Let's Link!</h2>
            </Col>
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <p>
              This doesn't have to end. Email me at alexander_stewart@brown.edu
              and let's talk about anything.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About
