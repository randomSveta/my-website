import React from 'react';
import SocialIconsLayout from '../social-icons/SocialIconsLayout';
import NavLinks from '../navigation/NavLinksFooter';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {
    return (
        <footer id="footer" className="container mw-100 m-0 px-4 py-0 app-dark-bg">
            <Row className="m-0 p-0">
                <Col xs="12" md="6" className="m-0 p-md-0 pt-4 pb-0 px-0 d-flex flex-row justify-content-center align-items-center">
                    <NavLinks />
                </Col>
                <Col xs="12" md="6" className="m-0 p-0">
                    <SocialIconsLayout place="footer" />
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col xs="12" className="m-0 p-0">
                    <p className="text-center text-white">Made with love by SK  <FontAwesomeIcon icon={faHeart} aria-hidden="true"></FontAwesomeIcon></p>
                </Col>
            </Row>
        </footer>
    );

}