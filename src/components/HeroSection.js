import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const slides = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    title: 'Great Indian Festival',
    subtitle: 'Up to 70% off on Electronics',
    cta: 'Shop Now',
    accent: '#febd69',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #0d1b2a 0%, #1b4332 100%)',
    title: "Today's Best Deals",
    subtitle: 'Exclusive offers on top brands',
    cta: 'See All Deals',
    accent: '#52b788',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #3d0000 0%, #720000 100%)',
    title: 'New Arrivals',
    subtitle: 'Fresh styles every day',
    cta: 'Explore Now',
    accent: '#ff6b6b',
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero" style={{ background: slide.bg }}>
      <div className="hero-content">
        <h1 className="hero-title" style={{ color: slide.accent }}>{slide.title}</h1>
        <p className="hero-subtitle">{slide.subtitle}</p>
        <button className="hero-cta" style={{ background: slide.accent, color: '#0F1111' }}>
          {slide.cta}
        </button>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
