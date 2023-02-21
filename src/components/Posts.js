import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import { FaCalculator } from 'react-icons/fa';

const Posts = () => {
    const [blogs , setBlogs] = useState([])

   useEffect( ()=>{
   axios.get('https://dummyjson.com/products')
   .then(res=> setBlogs(res.data.products))
   .catch(err => console.log(err))
   },[])

    return (
        <div className='posts'>
           <div className='search-container'>
            <input type="text" placeholder='search' className='search-input'></input>
           </div> 
           <div className='blog-icon'>
            <h3>Blogs</h3>
            <i className='fa fa-calculator'><FaCalculator/></i>
           </div>
           <div className='posts-container'>
           {blogs.map((blog, index) =>( 
           <Post blog={blog} key={index}/>
           ))}
           </div>
        </div>
    );
};

export default Posts;