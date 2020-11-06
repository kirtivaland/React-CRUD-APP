import React, {Component} from 'react';
import { Container, Row } from 'react-bootstrap';

import BlogList from '../../components/blog-list/blog-list.component';
import {SearchBox} from '../../components/search-box/search-box.component';
import './blogs.styles.scss';

class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/kirtivaland/React-CRUD-APP/blog')
        .then(response => response.json())
        .then(blogItems => this.setState({ blogs: blogItems}))
    }

    render() {
        const {blogs, searchField} = this.state;
        const filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchField.toLowerCase())
          )
        return (
            <section className="blog-list">
            <Container fluid>
                <Row>
                    <div className='blogs'>
                        <h1>Latest Blogs</h1>
                        <SearchBox placeholder='Search Blogs' handleChange={ this.handleChange}></SearchBox>
                        <BlogList blogs = {filteredBlogs}></BlogList>
                    </div>
                </Row>
            </Container>
            </section>
          )
    }
}

export default BlogPage;