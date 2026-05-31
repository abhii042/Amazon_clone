import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CategoryCards from './CategoryCards';
import ProductSection from './ProductSection';
import Footer from './Footer';
import CartToast from './CartToast';
import CartPage from './CartPage';
import ProductModal from './ProductModal';
import { products } from '../data/products';
import './HomePage.css';

function HomePage({ user, onLogout }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState('home'); // 'home' | 'cart' | 'checkout'
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(`Added to cart!`);
  };

  const handleUpdateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty } : item));
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCloseToast = useCallback(() => setToast(null), []);
  const handleSearch = (term) => { setSearchQuery(term.toLowerCase()); setPage('home'); };
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const filteredProducts = searchQuery
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery) || p.category.toLowerCase().includes(searchQuery))
    : products;

  if (page === 'cart') {
    return (
      <div className="home-page">
        <Navbar user={user} cartCount={cartCount} onLogout={onLogout} onSearch={handleSearch} onCartClick={() => setPage('cart')} />
        <CartPage
          cart={cart}
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
          onBack={() => setPage('home')}
          onCheckout={() => alert('🎉 Order placed successfully! (Demo)')}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="home-page">
      <Navbar user={user} cartCount={cartCount} onLogout={onLogout} onSearch={handleSearch} onCartClick={() => setPage('cart')} />

      {searchQuery ? (
        <div className="search-results-section">
          <h2 className="search-heading">
            {filteredProducts.length > 0 ? `Results for "${searchQuery}"` : `No results for "${searchQuery}"`}
          </h2>
          <div className="products-grid">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} onViewProduct={setSelectedProduct} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="no-results">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Try different keywords or browse our categories below.</p>
              <button onClick={() => setSearchQuery('')}>Clear Search</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <HeroSection />
          <CategoryCards />
          <ProductSection title="Deals of the Day" products={products.slice(0, 4)} onAddToCart={handleAddToCart} onViewProduct={setSelectedProduct} />
          <ProductSection title="Top Picks in Electronics" products={products.filter(p => p.category === 'Electronics')} onAddToCart={handleAddToCart} onViewProduct={setSelectedProduct} />
        </>
      )}

      <Footer />

      {toast && <CartToast message={toast} onClose={handleCloseToast} />}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(p) => { handleAddToCart(p); setSelectedProduct(null); }}
        />
      )}
    </div>
  );
}

import ProductCard from './ProductCard';

export default HomePage;
