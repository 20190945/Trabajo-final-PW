import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaShoppingBag } from 'react-icons/fa';  // Importamos los iconos
import '../styles/mainNavBar.css';
import logo from '../../../assets/logo/phantom_white.svg';

const MainNavBar = () => {
    return (
        <nav>
            {/*Logo de PHANTOM como boton de inicio */}
            <Link to="/">
                <img className='navbar-logo' src={logo} alt="Phantom Logo"/>
            </Link>
            <ul className='opciones'>
                <li>
                    <Link to="/about"><FaUserAlt size={24} /> {/* Icono de persona */}</Link>
                    <label>Mi cuenta</label>
                </li>
                <li>
                    <Link to="/tiendas"><FaHome size={24} /> {/* Icono de casa */}</Link>
                    <label>Nuestras Tiendas</label>
                </li>
                <li>
                    <Link to="/contact"><FaShoppingBag size={24} /> {/* Icono de bolsa */}</Link>
                    <label>Mi Bolsa</label>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavBar;


/*import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mainNavBar.css';
import logo from '../../../assets/logo/phantom_white.svg'

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
*/