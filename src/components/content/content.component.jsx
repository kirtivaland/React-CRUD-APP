import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './content.styles.scss';
function Content(props) {

    return(
        <section className="page-section">
        <Container>
            <Row className="justify-content-center">
                <Col lg={12}>
                {props.children}
                </Col>                
            </Row>
        </Container>
        </section>
    );

}

export default Content;