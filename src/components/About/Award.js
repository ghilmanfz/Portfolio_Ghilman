import React from "react";
import { Col, Row } from "react-bootstrap";
import Juara5 from "C:/Users/us/Downloads/tesporto/src/Assets/juara5.jpeg"; // Update the import path accordingly
import Goldm from "C:/Users/us/Downloads/tesporto/src/Assets/goldm.jpeg"; // Update the import path accordingly

function Award() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.instagram.com/reel/CrM6NWQJoFU/?igshid=OGRjNzg3M2Y=" target="_blank" rel="noopener noreferrer">
          <img src={Juara5} alt="Juara5 Award" style={{ width: "90%", height: "auto" }} />
        </a>
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}>5th Place in Science-Based Waste Management Innovation Competition for Depok Youth, Plan International Indonesia Foundation, 2023</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.instagram.com/p/C9mMy9tzD3L/?igsh=bG9kMmY2YmFwdjR2" target="_blank" rel="noopener noreferrer">
          <img src={Goldm} alt="Goldm Award" style={{ width: "70%", height: "auto" }} />
        </a>
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}>Gold Medal World Youth Stem Invention Innovation (WYSII), Malaysia Young Scientists Organizations, 2024</p>
      </Col>
    </Row>
  );
}

export default Award;
