import React from 'react';
import Section from '../Section';
import { HASH_HOME } from '../../navigation/links/nav-links';
import { Row, Col } from 'reactstrap';

export default function Home(props) {
 

    const sectionsDisplay = HASH_HOME.map(section => {

        return (
            <Section key={section.id} content={section.jsx} name={section.name} sectionId={section.hashUrl.split('').splice(1).join('')} />
        );
    });

    return (
        <Row className="justify-content-center slign-items-center m-0 p-0">
            <Col xs='12' className="m-0 p-0">
                {sectionsDisplay}
            </Col>
        </Row>
    );
}