import React from 'react';
import '../styles/CategoriesSection.css';
import consolaImg from '../../../assets/categories/consola.jpg'
import juegosImg from '../../../assets/categories/juego.jpeg';
import perifericosImg from '../../../assets/categories/periferico.jpeg';
import sillasGamerImg from '../../../assets/categories/silla_gamer.jpeg';
import streamingImg from '../../../assets/categories/streaming.jpeg';

const categories = [
  { name: 'CONSOLAS', img: consolaImg },
  { name: 'JUEGOS', img: juegosImg },
  { name: 'PERIFÉRICOS', img: perifericosImg },
  { name: 'SILLAS GAMER', img: sillasGamerImg },
  { name: 'STREAMING', img: streamingImg }
];

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <h2>NUESTRAS CATEGORÍAS</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;