import React, {Component} from 'react'
import { ReactComponent as Facebook } from '../logos/bxl-facebook.svg'
import { ReactComponent as Linkedin } from '../logos/bxl-linkedin.svg'
import { ReactComponent as Twitter } from '../logos/bxl-twitter.svg'
import { ReactComponent as Insta } from '../logos/bxl-instagram-alt.svg'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <footer class="footer mt-auto py-3 bg-light">
        <div class="container d-flex justify-content-center align-items-center">
          <div class="mx-5">
            <Facebook/>
            <Linkedin/>
            <Twitter/>
            <Insta/>
          </div>
          <span class="text-muted mx-5">#BLACKLIVESMATTER</span>
        </div>
      </footer>
    );
  }
}

export default Footer
