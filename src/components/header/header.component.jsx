import React from 'react';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../logo.svg';

import './header.styles.scss';

const TopHeader = () => (
    <header class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <Container fluid>
            <Row>
                <Navbar>
                    <Col sm={4}>
                        <Navbar.Brand as={Link} to="/">
                            <Logo className="logo" />
                        </Navbar.Brand>
                    </Col>
                    
                    <Col sm={8}>
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/blogs/add">Add Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Col>
                    
                </Navbar>
            </Row>
        
        </Container>
    </header>

)

export default TopHeader;