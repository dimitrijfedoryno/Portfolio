import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ahooj všichni, já jsem <span className="purple">Dimitrij Fedoryno </span>
            z <span className="purple"> České Republiky.</span>
            <br />
            V současné době pracuji jako softwarový vývojář na volné noze.
            <br />
            Absolvoval jsem maturitní zkoušku v oboru ŠVP PROGRAMOVÁNÍ POČÍTAČOVÉ SÍTĚ a ENERGETIKA.
            <br />
            <br />
            Kromě kódování se věnuji i dalším činnostem, které mě baví!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fotografování
            </li>
            <li className="about-activity">
              <ImPointRight /> Psaní tech blogů
            </li>
            <li className="about-activity">
              <ImPointRight /> Cestování
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Snažte se vytvářet věci, které mají smysl!"{" "}
          </p>
          <footer className="blockquote-footer">Dimitrij Fedoryno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
