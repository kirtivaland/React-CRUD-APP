import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './footer.styles.scss';

function Footer() {

    return(
        <footer className="bg-dark text-white fixed-bottom">
            <Container>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12} xs={4}>
                        Kirti Valand
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={6} sm={6} xs={8}>
                        React + Bootstrap CRUD Application made by SnapshotCoder.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;