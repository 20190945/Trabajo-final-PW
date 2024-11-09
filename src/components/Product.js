import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default Product;