import React, { useState, useEffect } from 'react';

function PromoSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      tomorrow.setHours(0, 0, 0, 0);
      
      const diff = tomorrow - now;
      
      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-container">
      <div className="promo-card daily-offers">
        <div className="offer-badge">⏰ Limited Time</div>
        <h3>Daily Flash Deal</h3>
        <p style={{ marginBottom: '20px', color: 'white' }}>Get up to 50% off on selected items</p>
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '15px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '10px 15px',
            borderRadius: '8px',
            minWidth: '60px'
          }}>
            <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
            <p style={{ fontSize: '12px', opacity: 0.8 }}>Hours</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '10px 15px',
            borderRadius: '8px',
            minWidth: '60px'
          }}>
            <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
            <p style={{ fontSize: '12px', opacity: 0.8 }}>Minutes</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '10px 15px',
            borderRadius: '8px',
            minWidth: '60px'
          }}>
            <strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>
            <p style={{ fontSize: '12px', opacity: 0.8 }}>Seconds</p>
          </div>
        </div>
        <button className="btn btn-primary">View Deals</button>
      </div>

      <div className="promo-card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="offer-badge" style={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}>🎁 Special Offer</div>
        <h3>Exclusive Member Benefits</h3>
        <p style={{ marginBottom: '20px', color: 'white' }}>Sign up for exclusive deals & early access to new products</p>
        <ul style={{
          textAlign: 'left',
          marginBottom: '20px',
          listStyle: 'none'
        }}>
          <li style={{ marginBottom: '8px' }}>✓ Free shipping on orders over ₹500</li>
          <li style={{ marginBottom: '8px' }}>✓ Exclusive member discounts</li>
          <li>✓ Priority customer support</li>
        </ul>
        <button className="btn btn-primary">Join Now</button>
      </div>
    </div>
  );
}

export default PromoSection;
