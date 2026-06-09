import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About ElectroHub</h4>
            <p>Your trusted destination for premium electronics and gadgets.</p>
            <p style={{ fontSize: '14px', marginTop: '10px', fontWeight: 'bold' }}>
              👤 Owner: Sonu
            </p>
            <p style={{ fontSize: '14px', marginTop: '5px' }}>
              📍 Uttam Nagar East
            </p>
            <div style={{ marginTop: '15px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '15px' }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '15px' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '15px' }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <a href="/contact">Contact Us</a>
            <a href="/faq">FAQ</a>
            <a href="/shipping">Shipping Info</a>
            <a href="/returns">Returns</a>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/#products">Products</a>
            <a href="/#deals">Deals</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive deals and updates</p>
            <div style={{
              display: 'flex',
              marginTop: '10px',
              gap: '10px'
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '4px'
                }}
              />
              <button className="btn btn-primary" style={{ padding: '8px 15px' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #444',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#aaa'
        }}>
          <p>&copy; 2024 ElectroHub. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
