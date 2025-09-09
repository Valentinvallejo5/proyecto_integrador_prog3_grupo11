import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <nav className="Navigation">
            <ul className="barrita">
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Peliculas destacadas</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Favoritas</a></li>
        
            </ul>
            </nav>

        </div>

    )
}

export default Navbar;