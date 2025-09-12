import React from 'react';
import './Navbar.css';
import NavItems from '../NavItems/NavItems';

function Navbar(){
      const opcionesMenu = [
    { name: "Home", link: "/" },
    { name: "Peliculas destacadas", link: "/peliculas" },
    { name: "Series", link: "/series"},
     { name: "Favoritas", link: "/favoritas"
     },
  ];
    return(
        <div>
            <nav className="Navigation">
            <ul className="barrita">
                <li><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6v12M8 6v12l8-6-8-6Z"/>
                </svg>
                </li>
        <ul className="barrita">
        {opcionesMenu.map((opcion, idx) => (
            <NavItems key={idx} name={opcion.name} link={opcion.link} />
        ))}
      </ul>
            </ul>
            </nav>

        </div>

    )
}

export default Navbar;