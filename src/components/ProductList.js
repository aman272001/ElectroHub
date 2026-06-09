import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  return (
    <section id="products">
      <h2 className="section-title">✨ Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
