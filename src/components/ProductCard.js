import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="product-card">
      <div className="product-image">
        <span style={{ fontSize: '80px' }}>{product.icon}</span>
        <span className="discount-badge">{discountPercentage}% OFF</span>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span style={{ marginLeft: '5px' }}>({product.rating})</span>
        </div>
        <div className="product-price">
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="current-price">₹{product.price}</span>
        </div>
        <div className="product-footer">
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            <i className="fas fa-shopping-cart"></i> Add
          </button>
          <button
            className="wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            style={{
              background: isWishlisted ? '#f093fb' : '#f0f0f0',
              color: isWishlisted ? 'white' : 'inherit'
            }}
          >
            <i className={`fas fa-heart${isWishlisted ? '' : '-outline'}`}></i>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
