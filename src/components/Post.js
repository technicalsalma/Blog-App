import React from 'react';
import '../style.css'
import {Link} from 'react-router-dom'

const Post = ({blog}) => {
    return (
        <Link className='blog-link'>
        <div className='blog'>
            <img className='blog-image' src={blog.thumbnail} alt=""/>
            <div className='blog-title'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
        </Link>
    );
};

export default Post;