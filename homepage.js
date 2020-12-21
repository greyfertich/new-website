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

// my sections
import Titlescreen from "./titlescreen.js";
import Experience from "./experience.js";
import AboutMe from "./aboutme.js";
import Projects from "./projects.js";
import Skills from "./skills.js";
import Certifications from "./certifications.js";

class Homepage extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Titlescreen />
          <AboutMe />
          <Experience />
          <Projects />
          {/*<Skills />*/}
          <Certifications />
        </main>
      </>
    );
  }
}

export default Homepage;
