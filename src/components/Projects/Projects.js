import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mps from "../../Assets/Projects/mps.jpeg";
import cat from "../../Assets/Projects/cat.jpeg";
import kurban from "../../Assets/Projects/kurban.jpeg";
import signlang from "../../Assets/Projects/signlang.jpeg";
import bot from "../../Assets/Projects/bot.jpeg";
import stokbr from "../../Assets/Projects/stokbr.jpeg";

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
              imgPath={mps}
              isBlog={false}
              title="Student Points Management"
              description="Student Points Management is an Information System for monitoring and controlling Achievement Points, Violations and Corrections built with php, JavaScript and MySQL. Has 5 access rights: student/parent, homeroom teacher, guidance counselor, school principal, administrators."
              ghLink="https://github.com/ghilmanfz/"
              demoLink="https://kacigota.biz.id/ManajemenPoinSiswa/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="CAT (Care About Trash)"
              description="CAT is an application for waste management education. Features: Video Education, Chat with AI, Games, Manage Waste Around, Quizzes. Made using Kodular."
              ghLink="https://github.com/ghilmanfz/"
              demoLink="https://youtu.be/15FAD2pAz9M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kurban}
              isBlog={false}
              title="Qoorban"
              description="Designed to manage and monitor the qurban process by recording income, expenses, and data management of recipients and donors. The goal is to improve efficiency, accuracy, and transparency in qurban management, as well as facilitate decision making through accurate recording, data management, and reporting features. Created using PHP, Javascript, MySQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signlang}
              isBlog={false}
              title="Text To Sign Language"
              description="Contains Education, Quiz, and Translation from Sign Language, built using JavaScript, CSS, HTML."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="GhzBot"
              description="We can ask AI directly without having to open ChatGPT (this is very useful for fast needs with weak internet areas) built using Node JS and API Key from OPENAI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stokbr}
              isBlog={false}
              title="Monitoring Stock"
              description="A system to monitor CRUD starting from Incoming Outgoing, Transactions, Reporting from Stock Monitoring results. Built using PHP, JavaScript, MySQL."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
