import React from 'react';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>realme</h1>
      </div>
      <div className="menu">
        <ul>
          <li className='phone'><a href="">realme Smartphones</a></li>
          <li className='phone'><a href="">narzo Smartphones</a></li>
          <li className='phone'><a href="">realme TV</a></li>
          <li className='phone'><a href="">Laptop & Tablet</a></li>
          <li className='phone'><a href="">Audio</a></li>
          <li className='phone'i><a href="">Smart Life</a></li>
          <li>Brand</li>
          <li><a href=""></a>Support</li>
          <li><a href=""></a>Community</li>




        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;