import React from 'react';
import { Card } from 'react-bootstrap';

import './blog.styles.scss';

const BlogItem = (props) => (
    <Card className="col-md-6 col-lg-4 mb-5" key={props.blog.id}  >
        <Card.Img variant="top" src={`https://source.unsplash.com/collection/${props.blog.id}/1600x900`} />
        <Card.Body>
            <Card.Title>{props.blog.title}</Card.Title>
            <Card.Text>{props.blog.author}</Card.Text>
        </Card.Body>
    </Card>
)

export default BlogItem;