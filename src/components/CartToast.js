import React, { useEffect } from 'react';
import './CartToast.css';

function CartToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="cart-toast">
      <i className="fa-solid fa-circle-check"></i>
      <span>{message}</span>
    </div>
  );
}

export default CartToast;
