import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import diyCalc from "../../Assets/Projects/diy-calc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Moje poslední <strong className="purple">PROJEKTY </strong>
        </h1>
        <p style={{ color: "white" }}>
          Zde je několik projektů, na kterých jsem v poslední době pracoval.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Minecraft cover page"
              description="Jednoduchá úvodní stránka pro Minecraft servery, která zobrazuje informace o serveru jako IP adresu, aktuální počet hráčů a jejich herní statistiky. Uživatelé mohou rychle získat přehled o stavu serveru a připojit se prostřednictvím odkazu na IP adresu."
              ghLink="https://github.com/dimitrijfedoryno/minecraft-server-cover-page.git"
              demoLink="https://minecraft.fedoryno.cz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diyCalc}
              isBlog={false}
              title="DIY Kalkulačka"
              description="Nástroj, který usnadní vaperům výpočet parametrů spirálek pro jejich vapovací zařízení a optimalizaci poměrů míchání liquidů."
              ghLink="#"
              demoLink="https://kalkulacka.fedoryno.cz/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
