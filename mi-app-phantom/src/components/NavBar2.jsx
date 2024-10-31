import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/navBar2.css'; // Crea un nuevo archivo de estilos para este navbar
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importamos íconos de redes sociales

const NavBar2 = () => {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-links">
                    <li><Link to="/politicas">Políticas y Condiciones</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/signup">Crear Cuenta</Link></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://www.twitter.com"><FaTwitter /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar2;