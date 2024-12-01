import React from 'react';
import '../styles/MyAccount.css';

const MyAccount = () => {
  return (
    <div className="account-info-container">
      {/* Títulos principales */}
      <div className="header-section">
        <h1 className="main-title">My Account</h1>
        <h2 className="subtitle">Información de la cuenta</h2>
      </div>

      {/* Cajas principales */}
      <div className="boxes-container">
        {/* Caja 1: Información del contacto */}
        <div className="info-box">
          <div className="box-header">INFORMACIÓN DEL CONTACTO</div>
          <div className="box-body">
            <p>Juan Pérez</p>
            <p>juan.perez@example.com</p>
          </div>
          <div className="box-footer">
            <button className="text-button">Editar</button>
            <button className="text-button">Cambiar la contraseña</button>
          </div>
        </div>

        {/* Caja 2: Boletines informativos */}
        <div className="info-box">
          <div className="box-header">BOLETINES INFORMATIVOS</div>
          <div className="box-body">
            <p>Juan Pérez</p>
            <p>juan.perez@example.com</p>
          </div>
          <div className="box-footer">
            <button className="text-button">Editar</button>
          </div>
        </div>

        {/* Subtítulo: Libreta de direcciones */}
        <h2 className="subtitle">Libreta de direcciones</h2>
        {/* Caja 3: Dirección de factura */}
        <div className="info-box">
          <div className="box-header">DIRECCIÓN DE FACTURA POR DEFECTO</div>
          <div className="box-body">
            <p>Juan Pérez</p>
            <p>juan.perez@example.com</p>
          </div>
          <div className="box-footer">
            <button className="text-button">Editar dirección</button>
          </div>
        </div>

        {/* Caja 4: Dirección de envío */}
        <div className="info-box">
          <div className="box-header">DIRECCIÓN DE ENVÍO PREDETERMINADA</div>
          <div className="box-body">
            <p>Juan Pérez</p>
            <p>juan.perez@example.com</p>
          </div>
          <div className="box-footer">
            <button className="text-button">Editar dirección</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
