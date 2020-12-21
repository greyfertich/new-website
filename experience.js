/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Experience extends React.Component {
  state = {};
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }
  render() {
    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
          {/* SVG separator */}
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
                points="0 0 0 100 2560 0"
              />
            </svg>
          </div>
            <div className="shape shape-style-1 shape-default bg-gradient-danger">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-1 text-white">
                      Experience
                    </h1>
                    <p className="lead text-white">
                      The design system comes with four pre-built pages to
                      help you get started faster. You can change the text and
                      images and youre good to go.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
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
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0 floating">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h5 className="text-warning text-uppercase">
                          Amazon
                        </h5>
                        <h6 className="text-warning text-uppercase">
                          Software Development Engineer Intern
                        </h6>
                        <h6 className="text-default text-uppercase">
                          May 2021 - August 2021
                        </h6>
                        <h6 className="text-default">
                          Seattle, WA
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            design
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            system
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            creative
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0 floating">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h5 className="text-success text-uppercase">
                          JPMorgan Chase & Co.
                        </h5>
                        <h6 className="text-success text-uppercase">
                          Software Engineer Intern
                        </h6>
                        <h6 className="text-default text-uppercase">
                          June 2020 - August 2020
                        </h6>
                        <h6 className="text-default">
                          Chicago, IL
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            business
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            vision
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            success
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0 floating">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h5 className="text-primary text-uppercase">
                          SAP
                        </h5>
                        <h6 className="text-primary text-uppercase">
                          Software Engineer Intern
                        </h6>
                        <h6 className="text-default text-uppercase">
                          May 2019 - April 2020
                        </h6>
                        <h6 className="text-default">
                          Pittsburgh, PA
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap
                          4 that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            marketing
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            product
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            launch
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5 text-center">
            <h1 className="display-4">
              Full experience can be found on my <a className="text-warning" href="#">Resume</a>
            </h1>
          </Container>
        </section>
      </>
    );
  }
}

export default Experience;
