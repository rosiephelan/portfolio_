import React from "react"
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Articles">Articles</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
