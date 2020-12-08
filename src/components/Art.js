import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Test from '../img//art/two_friends.jpg'
import Test2 from '../img//art/color_8mm.jpg'
import Alex from '../img/alex.png'
import Ani from '../img/art/ohwayya.MP4'

class Art extends Component {
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
              <Carousel className="" style={{height: "75vh", width: "100%"}}>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={Test}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={Test2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="">
            <Col>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Art
