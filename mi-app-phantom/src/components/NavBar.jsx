// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/navBar.css';

const NavBar = () => {
    return (
        <nav>
            <img className='navbar-logo' src='https://phantom.pe/media/wysiwyg/logo/phantom_white.svg'/>
            <ul className='opciones'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;