import React from 'react';
import BlogItem from '../blog/blog.component';

import './blog-list.styles.scss'

const BlogList = props => (
    <div className='card-list'>
        {
            props.blogs.map( blog => 
                ( 
                    <BlogItem key={blog.id} blog={blog}></BlogItem> 
                )
            )
        }
    </div>
)

export default BlogList;
    
