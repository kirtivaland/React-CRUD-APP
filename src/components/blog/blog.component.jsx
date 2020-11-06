import React from 'react';
import { Card } from 'react-bootstrap';

import './blog.styles.scss';

const BlogItem = (props) => (
    <Card key={props.blog.id} style={{ width: '25rem' }}>
        <Card.Img variant="top" src={`https://source.unsplash.com/collection/${props.blog.id}/1600x900`} />
        <Card.Body>
            <Card.Title>{props.blog.title}</Card.Title>
            <Card.Text>{props.blog.author}</Card.Text>
        </Card.Body>
    </Card>
)

export default BlogItem;