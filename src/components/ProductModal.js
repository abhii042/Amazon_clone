import React, { useState } from 'react';
import './ProductModal.css';

function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) stars.push(<i key={i} className="fa-solid fa-star"></i>);
      else if (i - 0.5 <= rating) stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
      else stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-content">
          <div className="modal-img">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-details">
            <h2>{product.name}</h2>

            <div className="modal-rating">
              <span className="modal-stars">{renderStars(product.rating)}</span>
              <span className="modal-review-count">{product.reviews?.toLocaleString()} ratings</span>
            </div>

            <div className="modal-price-section">
              <div className="modal-price">
                <span className="sym">₹</span>
                <span className="whole">{product.price.toLocaleString()}</span>
              </div>
              {product.originalPrice && (
                <div className="modal-original">
                  M.R.P.:{' '}
                  <span className="strikethrough">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="save-tag"> Save {discount}%</span>
                </div>
              )}
            </div>

            <div className="modal-badges">
              <span className="badge green">✔ In Stock</span>
              <span className="badge blue">🚚 FREE Delivery</span>
            </div>

            <div className="modal-qty">
              <label>Qty:</label>
              <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <button
              className={`modal-add-btn ${added ? 'added' : ''}`}
              onClick={handleAdd}
            >
              {added ? '✔ Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="modal-buy-btn">Buy Now</button>

            <div className="modal-meta">
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Returns:</strong> 30-day return policy</p>
              <p><strong>Sold by:</strong> Amazon Seller Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
