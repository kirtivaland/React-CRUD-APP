import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../logo.svg';

import './header.styles.scss';

const TopHeader = () => (
    <header className="header bg-dark text-uppercase fixed-top">
        <Container>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand className="js-scroll-trigger" as={Link} to="/">
                    <Logo className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Nav.Link className="py-3 px-0 px-lg-3 rounded js-scroll-trigger" as={Link} to="/blogs">Blog</Nav.Link>
                        <Nav.Link className="py-3 px-0 px-lg-3 rounded js-scroll-trigger" as={Link} to="/blogs/add">Add Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
)

export default TopHeader;