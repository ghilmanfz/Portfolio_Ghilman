import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ghilman Faza </span>
            from <span className="purple"> Depok, Indonesia.</span>
            <br />
            I'm currently working towards my Bachelor's degree in Information Systems.
            <br />
            I've achieved several national and international accomplishments and successfully completed a few projects.
            <br />
            <br />
            Besides coding, there are a few other things I really enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              Reading
            </li>
            <li className="about-activity">
              Travelling
            </li>
            <li className="about-activity">
              Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "we can do everything, because we have to!"{" "}
          </p>
          <footer className="blockquote-footer">Ghilmanfz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
