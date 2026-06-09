import React from 'react';

function Header({ cartCount, onCartClick }) {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <i className="fas fa-bolt"></i>
            ElectroHub
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
            📍 Uttam Nagar East | Owner: Sonu
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <div className="cart-icon" onClick={onCartClick}>
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
