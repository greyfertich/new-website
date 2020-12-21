import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Projects extends React.Component {
  state = {};
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }
  render() {
    return (
      <>
      <section className="section section-lg bg-gradient-primary">
        <div className="separator separator-top separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="0 0 2560 100 2560 0"
            />
          </svg>
        </div>
        <Container className="pb-100">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-2 text-white">Projects</h2>
              <p className="lead text-white">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record low maximum sea ice extent tihs year down
                to low ice.
              </p>
            </Col>
          </Row>
          <Row className="row-grid mt-5">
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-satisfied" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-success">
                      Tensorflow Developer Certificate
                    </h5>
                    <div>
                      <Badge color="success" pill className="mr-1">
                        Google
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="success"
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      View Certificate
                    </Button>
                  </div>
                </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-success">
                        Udacity Computer Vision Nanodegree
                      </h5>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          Udacity
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="success"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-default">
                        Tensorflow In Practice Specialization
                      </h5>
                      <div>
                        <Badge color="default" pill className="mr-1">
                          Coursera
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="default"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-default">
                        Convolutional Neural Networks
                      </h5>
                      <div>
                        <Badge color="default" pill className="mr-1">
                          Coursera
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="default"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-default">
                        Neural Networks And Deep Learning
                      </h5>
                      <div>
                        <Badge color="default" pill className="mr-1">
                          Coursera
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="default"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-lift--hover shadow border-0 mt-4">
                <CardBody className="py-5">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h5 className="title text-warning">
                        Stanford University Machine Learning
                      </h5>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          Stanford
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      </>
    );
  }
}

export default Projects;
