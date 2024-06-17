import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import NewsletterForm from '../../components/NewsletterForm';

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
              DOVOLTE MI <span className="purple"> ABYCH SE </span> PŘEDSTAVIL
            </h1>
            <p className="home-about-body">
              Zamiloval jsem se do programování a myslím, že jsem se alespoň něco naučil. 🤷‍♂️
              <br />
              <br />Plynně ovládám klasiky jako
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              Mým oborem zájmu je budování nových &nbsp;
              <i>
                <b className="purple">Webových technologií a produkty </b> a
                také v oblastech souvisejících s{" "}
                <b className="purple">
                  Blockchainen.
                </b>
              </i>
              <br />
              <br />
              Kdykoli je to možné, uplatňuji také svou vášeň pro vývoj produktů
              s <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Moderním Javascriptem a Frameworky
                </b>
              </i>
              &nbsp; jako je
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>NAJDETE MĚ NA</h1>
            <p>
              Neváhejte se se mnou <span className="purple">spojit </span>
              <NewsletterForm />
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dimitrijfedoryno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/fedoryno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fedoryno/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thefedoryno"
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
