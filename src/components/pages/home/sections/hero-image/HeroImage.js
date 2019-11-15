import React from 'react';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import SocialIconsDisplay from '../../../../social-icons/SocialIconsDisplay';

export default function HeroImage(props) {
  return (
      <Jumbotron id="hero-image" className="m-0 p-0 d-flex flex-column align-items-center justify-content-center text-center text-white">
        <Container>
          <Row className="m-0 p-0">
            <Col xs="12" className="m-0 p-0">
              <h1 id="hero-h1">Hi, my name is Sveta!</h1>
              <p id="hero-p">I am Web Developer</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <SocialIconsDisplay place="hero" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
  );
};

