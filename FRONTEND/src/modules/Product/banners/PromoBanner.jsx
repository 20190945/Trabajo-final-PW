import React from 'react';
import '../styles/promoBanner.css';
import powerpayLogo from '../../../assets/logo/powerpay_logo.png';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <img src={powerpayLogo} alt="Powerpay" className="promo-logo" />
        <p>
          | Cuotas <strong>desde 0% de interés</strong> con <strong>todas las tarjetas de 
          crédito</strong> y sin afectar toda tu línea.
        </p>
        <button className="promo-button">Más información</button>
      </div>
    </div>
  );
};

export default PromoBanner;