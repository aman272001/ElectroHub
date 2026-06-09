import React, { useState } from 'react';

function ProductDetail({ product, onAddToCart, onBack }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const savings = product.originalPrice - product.price;

  const productDetails = {
    'Wireless Earpods Pro': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0' },
        { label: 'Battery Life', value: 'Up to 8 hours (30 hours with case)' },
        { label: 'Charging Time', value: '1.5 hours' },
        { label: 'Noise Cancellation', value: 'Active Noise Cancellation (ANC)' },
        { label: 'Water Resistance', value: 'IPX4 Rated' },
        { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
      ],
      features: [
        'Premium active noise cancellation for immersive audio',
        'Lightweight and ergonomic design for all-day comfort',
        'Touch controls for easy playback management',
        'High-quality mic for crystal clear calls',
        'Seamless connectivity with all Bluetooth devices',
        'Compact charging case with LED indicator'
      ],
      description: 'Experience premium wireless audio with our Wireless Earpods Pro. Featuring cutting-edge active noise cancellation technology, these earpods deliver immersive sound quality. The ergonomic design ensures comfort for extended wear, while the 8-hour battery life keeps you entertained throughout the day. The premium build quality and intuitive touch controls make these earpods the perfect companion for music lovers and professionals alike.',
      inBox: ['Earpods (L, M, S ear tips)', 'Charging Case', 'USB-C Cable', 'Quick Start Guide', 'Warranty Card']
    },
    'Bluetooth Neckband': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0' },
        { label: 'Battery Life', value: 'Up to 12 hours' },
        { label: 'Charging Time', value: '2 hours' },
        { label: 'Driver Size', value: '10mm Dynamic Driver' },
        { label: 'Weight', value: '22 grams' },
        { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
      ],
      features: [
        'Extended 12-hour battery life for all-day use',
        'Lightweight and comfortable for long wearing sessions',
        'Deep bass with balanced mid and high frequencies',
        'Built-in magnetic earbuds that stick together',
        'Dual mic system for clear calling',
        'Vibration alert notification'
      ],
      description: 'The Bluetooth Neckband is designed for comfort and convenience. With its 12-hour battery life, you can enjoy music throughout the entire day without worrying about charging. The ergonomic design with memory alloy material ensures a comfortable fit for all head sizes. Perfect for outdoor activities, fitness, or daily commute.',
      inBox: ['Neckband Headphones', 'USB Charging Cable', 'Multiple Ear Tips', 'User Manual', 'Warranty Card', 'Carrying Pouch']
    },
    'Over-Ear Headphones': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0 + 3.5mm Jack' },
        { label: 'Battery Life', value: 'Up to 20 hours' },
        { label: 'Driver Size', value: '40mm Dynamic Driver' },
        { label: 'Frequency Response', value: '20Hz - 20kHz' },
        { label: 'Impedance', value: '32 Ohms' },
        { label: 'Warranty', value: '2 Year Manufacturer Warranty' }
      ],
      features: [
        'Studio-quality sound with deep bass and crystal clear highs',
        'Comfortable over-ear design with premium padding',
        'Active noise cancellation for immersive listening',
        'Foldable design with carrying case included',
        'Built-in microphone for hands-free calling',
        '20-hour battery life on single charge'
      ],
      description: 'Professional-grade over-ear headphones designed for audiophiles. Experience studio-quality sound with these premium headphones featuring 40mm dynamic drivers. The comfortable padding and adjustable headband make them perfect for extended listening sessions. Whether you\'re mixing music or enjoying your favorite tracks, these headphones deliver exceptional audio quality.',
      inBox: ['Over-Ear Headphones', 'Audio Cable', 'USB Charging Cable', 'Carrying Case', 'Quick Start Guide', 'Warranty Card']
    },
    'Fast Charger 65W': {
      specs: [
        { label: 'Wattage', value: '65W Maximum' },
        { label: 'Input', value: '100-240V AC' },
        { label: 'Output Ports', value: 'USB-C' },
        { label: 'Protection', value: 'Multiple Safety Certifications' },
        { label: 'Cable Length', value: '1.5 meters' },
        { label: 'Warranty', value: '2 Year Manufacturer Warranty' }
      ],
      features: [
        '65W fast charging for rapid device charging',
        'Compact design perfect for travel',
        'Multiple safety protections built-in',
        'Wide voltage compatibility (100-240V)',
        'High-quality braided USB-C cable included',
        'Supports multiple devices'
      ],
      description: 'Charge your devices at lightning speed with this 65W Fast Charger. Designed with advanced charging technology, it safely and quickly charges your phones, tablets, and laptops. The compact form factor makes it ideal for travel, while the durable braided cable ensures longevity.',
      inBox: ['65W Charger Unit', 'USB-C Cable (1.5m)', 'User Manual', 'Warranty Card', 'Travel Pouch']
    },
    'Gaming Earpods': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.2' },
        { label: 'Battery Life', value: 'Up to 10 hours' },
        { label: 'Latency', value: 'Ultra-Low 40ms Latency' },
        { label: 'RGB Lighting', value: 'Customizable Colors' },
        { label: 'Driver', value: '10mm Gaming Driver' },
        { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
      ],
      features: [
        'Ultra-low 40ms latency for competitive gaming',
        'Customizable RGB lighting with 16 color options',
        'Immersive 3D spatial audio',
        'Noise-cancelling microphone for team communication',
        '10-hour battery life for marathon gaming sessions',
        'Compatible with all major gaming platforms'
      ],
      description: 'Designed specifically for gamers, these Gaming Earpods feature ultra-low latency to give you a competitive edge. The immersive 3D spatial audio lets you pinpoint enemy locations with precision. Customizable RGB lighting and premium build quality make these earpods a must-have for serious gamers.',
      inBox: ['Gaming Earpods', 'Charging Case', 'USB-C Cable', 'Multiple Ear Tips', 'User Manual', 'Warranty Card']
    },
    'Portable Charger 20000mAh': {
      specs: [
        { label: 'Capacity', value: '20000mAh' },
        { label: 'Input', value: 'USB-C & Micro USB' },
        { label: 'Output', value: 'Dual USB-C & USB-A' },
        { label: 'Charging Speed', value: 'Fast Charging (18W)' },
        { label: 'Size', value: 'Compact & Portable' },
        { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
      ],
      features: [
        '20000mAh capacity charges phone 3-5 times',
        'Dual input ports for flexible charging',
        'Dual output ports for charging two devices simultaneously',
        '18W fast charging technology',
        'Compact design fits easily in backpack or pocket',
        'LED display shows remaining battery percentage'
      ],
      description: 'Never run out of battery again with this 20000mAh Portable Charger. With dual input and output ports, you can charge multiple devices simultaneously. The compact design makes it perfect for travel, camping, or everyday use. Fast charging technology ensures your devices get powered up quickly.',
      inBox: ['20000mAh Power Bank', 'USB-C Cable', 'Micro USB Cable', 'Carrying Pouch', 'User Manual', 'Warranty Card']
    },
    'Sports Neckband': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0' },
        { label: 'Battery Life', value: 'Up to 10 hours' },
        { label: 'Water Resistance', value: 'IPX6 Rated' },
        { label: 'Weight', value: '18 grams' },
        { label: 'Material', value: 'Sports-grade Silicone' },
        { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
      ],
      features: [
        'IPX6 water resistance for sweat and rain protection',
        'Ultra-lightweight at just 18 grams',
        'Secure fit with flexible neckband design',
        'Powerful bass for workout motivation',
        'Dual mic noise cancellation for calls',
        'Magnetic earbuds for easy storage'
      ],
      description: 'Perfect for athletes and fitness enthusiasts, the Sports Neckband is designed to withstand intense workouts. The IPX6 water resistance protects against sweat and rain, while the ultra-lightweight design ensures comfort during long exercise sessions. The secure fit ensures the neckband stays in place during any activity.',
      inBox: ['Sports Neckband', 'USB Charging Cable', 'Multiple Ear Tips', 'Armband Strap', 'User Manual', 'Warranty Card']
    },
    'Studio Headphones': {
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0 + 3.5mm Jack' },
        { label: 'Battery Life', value: 'Up to 30 hours' },
        { label: 'Driver Size', value: '50mm Professional Driver' },
        { label: 'Frequency Response', value: '5Hz - 40kHz' },
        { label: 'Impedance', value: '32 Ohms' },
        { label: 'Warranty', value: '2 Year Manufacturer Warranty' }
      ],
      features: [
        'Professional 50mm driver for studio-quality sound',
        'Flat frequency response for accurate audio monitoring',
        'Foldable design with protective carrying case',
        'Comfortable for 8+ hour studio sessions',
        '30-hour battery life',
        'Active noise cancellation for isolation'
      ],
      description: 'The ultimate choice for music producers and audio professionals. These Studio Headphones feature a 50mm professional driver with flat frequency response, perfect for accurate audio mixing and mastering. The comfortable design and exceptional build quality make them ideal for long studio sessions.',
      inBox: ['Studio Headphones', 'Audio Cable', 'USB Charging Cable', 'Professional Carrying Case', 'Documentation', 'Warranty Card']
    }
  };

  const details = productDetails[product.name] || {
    specs: [
      { label: 'Connectivity', value: 'Standard' },
      { label: 'Battery', value: 'Standard' }
    ],
    features: ['Premium quality', 'Long lasting', 'Reliable performance'],
    description: product.description,
    inBox: ['Product', 'Cable', 'Documentation']
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      paddingBottom: '50px'
    }}>
      {/* Header with Back Button */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 100%)',
        padding: '20px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}>
        <div className="container">
          <button
            onClick={onBack}
            style={{
              background: '#f093fb',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#1a1a2e',
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            ← Back to Products
          </button>
        </div>
      </div>

      <div className="container">
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            {/* Product Image */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              position: 'relative',
              fontSize: '150px'
            }}>
              <span>{product.icon}</span>
              <span style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#facc15',
                color: '#1a1a2e',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                {discountPercentage}% OFF
              </span>
            </div>

            {/* Product Info */}
            <div>
              <h1 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '32px' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ color: '#facc15', fontSize: '18px', marginRight: '10px' }}>
                  ★★★★★ {product.rating}
                </span>
                <span style={{ color: '#666' }}>(2,547 Reviews)</span>
              </div>

              {/* Price Section */}
              <div style={{
                background: '#f5f5f5',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '25px'
              }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '8px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '14px', color: '#999' }}>Price:</span>
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}>
                    ₹{product.price}
                  </span>
                  <span style={{ fontSize: '18px', textDecoration: 'line-through', color: '#999' }}>
                    ₹{product.originalPrice}
                  </span>
                </div>
                <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>
                  You Save: ₹{savings}
                </div>
              </div>

              {/* Quantity Selector */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ color: '#333', fontWeight: 'bold', marginRight: '10px' }}>Quantity:</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      width: '40px',
                      height: '40px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    −
                  </button>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      width: '40px',
                      height: '40px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  style={{
                    flex: 1,
                    padding: '15px',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#764ba2'}
                  onMouseOut={(e) => e.target.style.background = '#667eea'}
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  style={{
                    padding: '15px 25px',
                    background: isWishlisted ? '#f093fb' : '#f0f0f0',
                    color: isWishlisted ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.transform = 'scale(1.05)'}
                >
                  <i className={`fas fa-heart${isWishlisted ? '' : '-outline'}`}></i> {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </button>
              </div>

              {/* Delivery Info */}
              <div style={{
                background: '#e8f5e9',
                padding: '15px',
                borderRadius: '8px',
                borderLeft: '4px solid #4ade80'
              }}>
                <p style={{ color: '#2e7d32', margin: '5px 0' }}>
                  <i className="fas fa-truck"></i> Free Delivery on orders above ₹500
                </p>
                <p style={{ color: '#2e7d32', margin: '5px 0' }}>
                  <i className="fas fa-shield-alt"></i> 1 Year Manufacturer Warranty
                </p>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div style={{
            borderTop: '2px solid #f0f0f0',
            paddingTop: '30px'
          }}>
            {/* Description */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '24px' }}>
                📝 Product Description
              </h2>
              <p style={{ color: '#333', lineHeight: '1.8', fontSize: '16px' }}>
                {details.description}
              </p>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '24px' }}>
                ✨ Key Features
              </h2>
              <ul style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px'
              }}>
                {details.features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    gap: '10px',
                    color: '#333',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ color: '#667eea', fontSize: '18px' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '24px' }}>
                ⚙️ Technical Specifications
              </h2>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <tbody>
                  {details.specs.map((spec, index) => (
                    <tr key={index} style={{
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <td style={{
                        padding: '12px',
                        fontWeight: 'bold',
                        color: '#667eea',
                        width: '30%'
                      }}>
                        {spec.label}
                      </td>
                      <td style={{
                        padding: '12px',
                        color: '#333'
                      }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* In the Box */}
            <div>
              <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '24px' }}>
                📦 What's in the Box
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px'
              }}>
                {details.inBox.map((item, index) => (
                  <div key={index} style={{
                    background: '#f5f5f5',
                    padding: '15px',
                    borderRadius: '8px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '20px' }}>📄</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
