import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom"



function Navbar({token, onLogout}) {
  return (
    <nav>


      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSWkpDBU6M-MliokLz4B1H1BbXiZvjHA1LQ&usqp=CAU" alt="Logo" />
      </div>
      <ul className="nav-links">
      {/* <li><a href="#">Tasty Trail</a></li> */}
        <li><Link to="/">TRIVIA</Link></li>
        <li><Link to="/landingpage"></Link></li>
        <li><Link to="/continents">Contintent</Link></li>
        <li><Link to="/diseases">Diseases</Link></li>
        <li><Link to="/countries">Countries</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;