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
  Col,
  Progress
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class AboutMe extends React.Component {
  state = {};
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }
  render() {
    return (
      <>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="default" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="secondary" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="info" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="success" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="danger" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="warning" />
        </div>
      </>
    );
  }
}

export default AboutMe;
