import React from 'react';
import { UncontrolledCollapse, Button, Nav, UncontrolledTooltip } from 'reactstrap';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function NavBarSections(props) {
    const sectionsNavList = props.sections;

    let sectionsNavLinks = [];
    if (sectionsNavList) {
        sectionsNavLinks = sectionsNavList.map(section => {
            return (
                <NavItem key={section.id} className="navbar-li-hash">
                    <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style-hash m-1 p-1 text-decoration-none' to={section.hashUrl}
                    >{section.name}</NavHashLink>
                </NavItem>
            );
        });
    }

    if (sectionsNavLinks.length !== 0) {
        return (
            <div className="d-flex flex-md-row-reverse flex-column justify-content-center align-items-center">
                <Button color="secondary" id="hash-list-toggler"><FontAwesomeIcon icon={faHashtag} className="active-item" /></Button>
                <UncontrolledTooltip placement="left" target="hash-list-toggler">
                    Sections navigation
                </UncontrolledTooltip>
                <UncontrolledCollapse toggler="#hash-list-toggler">
                    <Nav>
                        {sectionsNavLinks}

                    </Nav>
                </UncontrolledCollapse>
            </div>

        );
    }
    else {
        return null;
    }
}

