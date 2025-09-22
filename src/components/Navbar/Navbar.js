import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="Navigation">
      <ul className="barrita">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/peliculas">Películas</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    

    </nav>
    );
}

export default Navbar;
