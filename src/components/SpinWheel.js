import React, { useState } from 'react';

function SpinWheel({ onDiscount }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [lastWin, setLastWin] = useState(null);

  const discounts = [
    '10% OFF',
    '20% OFF',
    '5% OFF',
    '30% OFF',
    '15% OFF',
    'FREE SHIPPING',
    '25% OFF',
    'LUCKY SPIN',
    '12% OFF',
    'DOUBLE POINTS',
    '18% OFF',
    'SURPRISE GIFT'
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    // Generate random spin
    const randomSpin = Math.floor(Math.random() * 360) + 1800;
    const finalRotation = (wheelRotation + randomSpin) % 360;
    
    setWheelRotation(finalRotation);

    // Calculate which discount was won
    const segmentSize = 360 / discounts.length;
    const winningIndex = Math.floor((360 - (finalRotation % 360)) / segmentSize) % discounts.length;
    
    setTimeout(() => {
      setLastWin(discounts[winningIndex]);
      onDiscount();
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div id="deals">
      <h2 className="section-title">🎡 Spin & Win Amazing Discounts</h2>
      <div className="spin-wheel-container">
        <h3>Try Your Luck Today!</h3>
        <p style={{ marginBottom: '20px', fontSize: '18px' }}>Spin the wheel and get instant discounts</p>
        
        <div
          className="wheel"
          style={{
            transform: `rotate(${wheelRotation}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
          {discounts.map((discount, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
                transform: `rotate(${(index * 360) / discounts.length}deg) translateY(-85px)`,
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {discount}
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary spin-btn"
          onClick={handleSpin}
          disabled={isSpinning}
          style={{
            opacity: isSpinning ? 0.6 : 1,
            cursor: isSpinning ? 'not-allowed' : 'pointer'
          }}
        >
          {isSpinning ? '⏳ Spinning...' : '🎯 SPIN NOW'}
        </button>

        {lastWin && (
          <div style={{
            marginTop: '30px',
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid white'
          }}>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>You Won:</p>
            <h2 style={{ fontSize: '32px', color: '#ffeb3b' }}>{lastWin}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpinWheel;
