import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
const Nav = () => {
    return (
        <div className='nav'>
            <h2 className='nav-brand'>Salma</h2>
            <ul>
                <li><Link className='menu-btn'>Home</Link></li>
                <li><Link className='menu-btn'>New Blog</Link></li>
                
            </ul>
            
        </div>
    );
};

export default Nav;