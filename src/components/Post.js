import React from 'react';
import '../style.css'

const Post = ({blog}) => {
    return (
        <div className='blog'>
            <img className='blog-image' src={blog.thumbnail} alt=""/>
            <div className='blog-title'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default Post;