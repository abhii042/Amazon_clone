import React from 'react';
import { cardSections, boxSections } from '../data/products';
import './CategoryCards.css';

function CategoryCards() {
  return (
    <>
      <div className="container">
        {cardSections.map((section) => (
          <div className="card" key={section.id}>
            <h2>{section.title}</h2>
            <div className="grid">
              {section.items.map((item, idx) => (
                <div key={idx} className="grid-item">
                  <img src={item.img} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <a href="#">{section.link}</a>
          </div>
        ))}
      </div>

      <div className="container_2">
        {boxSections.map((box) => (
          <div className="box" key={box.id}>
            <h2>{box.title}</h2>
            <img src={box.img} alt={box.title} />
            {box.link && <a href="#">{box.link}</a>}
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryCards;
