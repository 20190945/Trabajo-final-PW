import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainNavBar.css';
import logo from '../assets/logo/phantom_white.svg';

const MainNavBar = () => {
    return (
        <nav>
            <img className='navbar-logo' src={logo} alt="Phantom Logo"/>
            <ul className='opciones'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default MainNavBar;