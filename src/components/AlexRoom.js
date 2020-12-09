import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TCone from '../logos/bx-traffic-cone.svg'

class AlexRoom extends Component {
  constructor(props) {
    super(props);

    // this needs fixing to where it will always fill rest of screen.
    // this will be helpful for all pages with small content

    this.state = {};
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <Container className="w-100 py-5">

          <Row className="my-2 d-flex">
            <Col className="py-2">
              <h2 className="">Come chill with me in my space.</h2>
              <p className="text-muted-personal">UNDER CONSTRUCTION</p>
              <p>The web is a BIG place. I think its comparable to if we were ants living in New York.
              There would be so much to do and so little time to see it all.
              We would spend all of our time just trying to get to the next cool
              spot! So many places to visit, so much information to take in ...
              we often forget to experience the spaces we are in before looking for
              the next one.</p>
              <p>Because you've decided to spend some time getting to know me,
              I wanted to give you a way to experience my portfolio, rather than
              just read about it. Come hang out in my virtual room for a while!
              You can learn everything about me you did from the portfolio site
              here, but you can also experience what the spaces I create are like.
              Listen to some music I made, explore the room, and enjoy the space
              while you're here!</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AlexRoom
