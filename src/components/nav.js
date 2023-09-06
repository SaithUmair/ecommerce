import React from 'react';
import {Link } from 'react-router-dom'
export default function Nav() {
  return (
      <nav className='nav1'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Latest</Link></li>
          <li><Link to='/'>Brands</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
  );
}
