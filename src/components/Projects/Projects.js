import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import MovieMagnet from "../../Assets/Projects/MovieMagnet.png";
import suicide from "../../Assets/Projects/suicide.png";
import weatherease from "../../Assets/Projects/Weatherease.png";

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
              imgPath={MovieMagnet}
              isBlog={false}
              title="Movie Magnet"
              description=" Developed a web application enabling users to search for and retrieve movie details
              Increased user engagement by 30%, reduced API response time by 40%, and improved user satisfaction by 25%."
              ghLink=""
              demoLink="https://movie-magnet17.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherease}
              isBlog={false}
              title="Weather Ease"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/prem-prasad1710/Weather-App"
              demoLink="https://weatherease.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
