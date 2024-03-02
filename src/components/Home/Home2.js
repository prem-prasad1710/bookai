import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import prem from "../../Assets/prem.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm 
              <b className="purple"> Prem Prasad </b>
              , a 
              <b className="purple"> 2nd-year BCA student </b>
               at Maharaja Surajmal Institute.
              <br />
              <br />I'm proficient in
                <b className="purple"> HTML , CSS, JavaScript, and React.js. </b>
                and I'm currently expanding my skills by learning  {" "}
                <b className="purple">Node.js</b>
              <br />
              <br />
              I'm passionate about&nbsp;
                <b className="purple">frontend development </b> and{" "}
                <b className="purple">
                  UI/UX designer
                </b>
              <br />
              <br />
              Looking for opportunities to contribute as a frontend developer or UI/UX designer.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={prem} className="img-fluid" alt="avatar" style={{ height: "500px", borderRadius: "8px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prem-prasad1710"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/premprasad1710/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prem-prasad1710/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/callme_prem_kashyap/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
