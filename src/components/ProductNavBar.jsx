import React from 'react';
import '../styles/productNavBar.css';

const ProductNavBar = () => {
  return (
    <div className="productnavbar-container">
      <div className="navbar-links">
        <div className="navbar-item">
          <a href="#cyber-phantom">CYBER PHANTOM</a>
          <div className="dropdown">
            <a href="#cyber1">Cyber Item 1</a>
            <a href="#cyber2">Cyber Item 2</a>
            <a href="#cyber3">Cyber Item 3</a>
          </div>
        </div>
        
        <div className="navbar-item">
          <a href="#gaming">GAMING</a>
          <div className="dropdown">
            <a href="#gaming1">Gaming Item 1</a>
            <a href="#gaming2">Gaming Item 2</a>
            <a href="#gaming3">Gaming Item 3</a>
          </div>
        </div>
        
        <div className="navbar-item">
          <a href="#sillas-gamer">SILLAS GAMER</a>
          <div className="dropdown">
            <a href="#sillas1">Silla Item 1</a>
            <a href="#sillas2">Silla Item 2</a>
            <a href="#sillas3">Silla Item 3</a>
          </div>
        </div>

        <div className="navbar-item">
          <a href="#audio">AUDIO</a>
          <div className="dropdown">
            <a href="#audio1">Audio Item 1</a>
            <a href="#audio2">Audio Item 2</a>
            <a href="#audio3">Audio Item 3</a>
          </div>
        </div>

        <div className="navbar-item">
          <a href="#tecnologia">TECNOLOGÍA</a>
          <div className="dropdown">
            <a href="#tecnologia1">Tecnologia Item 1</a>
            <a href="#tecnologia2">Tecnologia Item 2</a>
            <a href="#tecnologia3">Tecnologia Item 3</a>
          </div>
        </div>
        
        <div className="navbar-item">
          <a href="#funko">FUNKO</a>
          <div className="dropdown">
            <a href="#funko1">Funko Item 1</a>
            <a href="#funko2">Funko Item 2</a>
          </div>
        </div>
        
        <div className="navbar-item">
          <a href="#coleccionables">COLECCIONABLES</a>
          <div className="dropdown">
            <a href="#coleccionables1">Coleccionables Item 1</a>
            <a href="#coleccionables2">Coleccionables Item 2</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductNavBar;