import React from 'react';
import '../styles/footer.css';
import visaLogo from '../assets/payment/visa.png';
import mastercardLogo from '../assets/payment/mastercard.webp';
import amexLogo from '../assets/payment/amex.png';
import dinersLogo from '../assets/payment/diners.webp';
import safetypayLogo from '../assets/payment/safetypay.png';
import pagoefectivoLogo from '../assets/payment/pagoefectivo.png';
import cuotéaloLogo from '../assets/payment/cuotealo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTACTO</h3>
          <p>960984854</p>
          <p>lun-vie: 8:30 hrs. - 19:00 hrs</p>
          <p>Email: <a href="mailto:atencionalcliente1@phantom.com.pe">atencionalcliente1@phantom.com.pe</a></p>
        </div>
        <div className="footer-section">
          <h3>ENLACES IMPORTANTES</h3>
          <ul>
            <li><Link to="/reclamos">Libro de reclamaciones</Link></li>
            <li><Link to="/politicas">Políticas y condiciones de uso</Link></li>
            <li><Link to="/sugerencias">Sugerencias</Link></li>
            <li><a href="#guia-para-padres">Guía para padres</a></li>
            <li><a href="#trabaja">Trabaja con nosotros</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>INFORMACIÓN</h3>
          <ul>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><a href="#tiendas">Nuestras tiendas</a></li>
            <li><a href="#como-comprar">¿Cómo comprar?</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
            <li><a href="#comprobantes">Comprobantes Electrónicos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>SUSCRÍBETE</h3>
          <p>Suscríbete a nuestro Phantom News.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Dirección de email" />
            <button>IR</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-logos">
          <img src={visaLogo} alt="Visa" />
          <img src={mastercardLogo} alt="Mastercard" />
          <img src={amexLogo} alt="American Express" />
          <img src={dinersLogo} alt="Diners Club" />
          <img src={safetypayLogo} alt="Safety Pay" />
          <img src={pagoefectivoLogo} alt="Pago Efectivo" />
          <img src={cuotéaloLogo} alt="Cuotéalo" />
        </div>
        <p>PHANTOM © 2024. Todos los derechos reservados. Desarrollo por TGA Software</p>
      </div>
    </footer>
  );
};

export default Footer;