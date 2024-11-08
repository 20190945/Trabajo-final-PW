import React from 'react';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
    const { image, name, price, oldPrice, isNew, discountPercentage, rating } = product;

    return (
        <div className="product-card">
            <div className="product-image">
                {isNew && <span className="product-tag new">NUEVO</span>}
                {discountPercentage && <span className="product-tag discount">-{discountPercentage}%</span>}
                <img src={image} alt={name} />
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <div className="product-rating">
                    {Array(rating).fill('⭐')} 
                </div>
                <div className="product-pricing">
                    {oldPrice && <span className="product-old-price">S/{oldPrice}</span>}
                    <span className="product-price">S/{price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;