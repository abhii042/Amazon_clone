import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

function ProductSection({ title, products, onAddToCart, onViewProduct }) {
  return (
    <div className="product-section">
      <div className="section-header">
        <h2>{title}</h2>
        <a href="#">See all deals</a>
      </div>
      <div className="product-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
