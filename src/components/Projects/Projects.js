import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Electorent"
              description="A web app for renting electronics. Built with Node, Express, MongoDB. Implemented CRUD, authentication, Docker, CI/CD. This summary captures the key technical aspects while keeping it short and to-the-point for a project card format."
              ghLink="https://github.com/GlamorousBrusier12/electorent-server"
              demoLink="https://electorent.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Police Website"
              description="A web app bridging the police and public. Allows citizens to file FIRs online and police to manage criminal database. Implemented CRUD, CI/CD. Tech: HTML, CSS, Node, Express, MongoDB, Docker."
              ghLink="https://github.com/ravindra0608/PoliceWebsite"
              demoLink="https://ap-police.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart Social"
              description="A web app for people to interact. Used Google OAuth authentication. Implemented delayed jobs with Kue.js and Redis. Developed a REST API with CRUD. Tech: HTML, CSS, JS, Node, MongoDB, Redis."
              ghLink="https://github.com/glamorousbrusier12/smart-social"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
