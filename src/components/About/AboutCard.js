import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Prajapati </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I have completed a Bachelor of Computer Applications (BCA) and am currently pursuing a Master of Computer Applications (MCA).
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Leasning Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like a game—full of levels, challenges, and unexpected bugs. A coder knows that every error is just a step toward the perfect solution. Keep debugging, keep evolving"{" "}
          </p>
          <footer className="blockquote-footer">Vikas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
