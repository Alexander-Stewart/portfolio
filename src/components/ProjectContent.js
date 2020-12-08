import React, {Component} from 'react'
import Projects from '../Projects.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlaceHolder from '../logos/bxs-image.svg'

class ProjectContent extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.location)
    console.log(Projects.projects['redesign'])
    const projectName = this.props.location.pathname.split('/')[2]
    console.log(projectName)
    console.log(Projects.projects[projectName])
    if (this.props.location.state === undefined) {
      this.state = {
        project: Projects.projects[projectName]
      };
    } else {
      this.state = {
        project: this.props.location.projectProps.project
      };
    }
  }

  render() {
    return(
      <div className="d-flex flex-column justify-content-center align-items-center">
      <Container className="w-100">

          <Row className="my-2">
            <Col className="">
              <img src={this.state.project.mainImage} className="w-100 content-image py-2" style={{}} fluid/>
              <h2 className="">{this.state.project.projectTitle}</h2>
              <p className="text-muted">{this.state.project.subtitle}</p>
              <div id="project-background">
                {this.state.project.contextText.map(text =>
                  <p>
                    {text}
                  </p>
                )}
              </div>
            </Col>
          </Row>

          {this.state.project.problemText.length > 0 &&
          <div className="my-5" id="problem">
            <Row>
              <Col>
                <h3>The Problem</h3>
              </Col>
            </Row>
            <Row className="my-2">
                {this.state.project.problemImages.map(img =>
                  <Col>
                    <img src={img} className="img-fluid" style={{}}/>
                  </Col>
                )}
            </Row>
            <Row>
              <Col>
                <div>
                  {this.state.project.problemText.map(text =>
                    <p>
                      {text}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          }


          {this.state.project.designIterationsText.length > 0 &&
          <div className="my-5" id="design-iterations">
            <Row>
              <Col>
                <h3>Design Iterations</h3>
              </Col>
            </Row>
            <Row className="my-2">
                {this.state.project.designIterationsImages.map(img =>
                  <Col>
                    <img src={img} className="img-fluid" style={{}}/>
                  </Col>
                )}
            </Row>
            <Row>
              <Col>
                <div>
                  {this.state.project.designIterationsText.map(text =>
                    <p>
                      {text}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          }

          {this.state.project.solutionText.length > 0 &&
          <div className="my-5" id="solution">
            <Row>
              <Col>
                <h3>The Solution</h3>
              </Col>
            </Row>
            <Row className="my-2">
              {this.state.project.solutionImages.map(img =>
                <Col>
                  <img src={img} className="img-fluid" style={{}} fluid/>
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                <div>
                  {this.state.project.solutionText.map(text =>
                    <p>
                      {text}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          }

          {this.state.project.conclusionText.length > 0 &&
          <div className="my-5" id="takeaways">
            <Row>
              <Col>
                <h3>Takeaways</h3>
                <div id="solution">
                  {this.state.project.conclusionText.map(text =>
                    <p>
                      {text}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          }

        </Container>
      </div>
    );
  }
}

export default ProjectContent
