import React from 'react';
import './CartPage.css';

function CartPage({ cart, onUpdateQty, onRemove, onBack, onCheckout }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
      <span className="cart-stars">
        {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
      </span>
    );
  };

  return (
    <div className="cart-page">
      <div className="cart-main">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span className="cart-deselect">Price</span>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <i className="fa-solid fa-cart-shopping"></i>
            <h2>Your Amazon Cart is empty</h2>
            <p>Shop today's deals</p>
            <button className="continue-btn" onClick={onBack}>Continue Shopping</button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-stock">In Stock</p>
                  <div className="cart-item-rating">
                    {renderStars(item.rating)}
                    <span className="cart-item-reviews">({item.reviews?.toLocaleString()})</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                      >−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <span className="action-divider">|</span>
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>Delete</button>
                    <span className="action-divider">|</span>
                    <button className="save-btn">Save for later</button>
                  </div>
                </div>
                <div className="cart-item-price">
                  ₹{(item.price * item.qty).toLocaleString()}
                  {item.originalPrice && (
                    <span className="item-savings">
                      Save ₹{((item.originalPrice - item.price) * item.qty).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="cart-subtotal-row">
              Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):&nbsp;
              <strong>₹{subtotal.toLocaleString()}</strong>
            </div>
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-sidebar">
          <div className="cart-summary">
            <p className="free-delivery">
              <i className="fa-solid fa-check" style={{ color: '#007600' }}></i>
              &nbsp;Your order qualifies for <strong>FREE Delivery</strong>.
            </p>
            <p className="summary-subtotal">
              Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):&nbsp;
              <strong>₹{subtotal.toLocaleString()}</strong>
            </p>
            <label className="gift-check">
              <input type="checkbox" /> This order contains a gift
            </label>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Buy
            </button>
            <button className="back-btn" onClick={onBack}>
              ← Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
