import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <Navbar expand="lg" className="py-3">
        <Navbar.Brand>Anon Student</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/">Work</Link></Nav.Link>
            <Nav.Link><Link to="/art">Art</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/alexs-room">Anon's Room</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar
