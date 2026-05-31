import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onViewProduct }) {
  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < full; i++) stars.push(<i key={`f${i}`} className="fa-solid fa-star"></i>);
    if (half) stars.push(<i key="h" className="fa-solid fa-star-half-stroke"></i>);
    const empty = 5 - stars.length;
    for (let i = 0; i < empty; i++) stars.push(<i key={`e${i}`} className="fa-regular fa-star"></i>);
    return stars;
  };

  return (
    <div className="product-card" onClick={() => onViewProduct && onViewProduct(product)}>
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="review-count">({product.reviews?.toLocaleString()})</span>
        </div>
        <div className="product-price">
          <span className="price-symbol">₹</span>
          <span className="price-whole">{product.price.toLocaleString()}</span>
        </div>
        {product.originalPrice && (
          <p className="original-price">
            M.R.P.: <span>₹{product.originalPrice.toLocaleString()}</span>
            <span className="discount"> ({Math.round((1 - product.price / product.originalPrice) * 100)}% off)</span>
          </p>
        )}
        <p className="delivery-info">
          <i className="fa-solid fa-truck-fast"></i> FREE delivery by tomorrow
        </p>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
