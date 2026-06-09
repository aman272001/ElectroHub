import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({ products, onAddToCart, onDiscount }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Product not found</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/')}
          style={{ marginTop: '20px' }}
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const specifications = {
    'Earpods': [
      { label: 'Type', value: 'True Wireless' },
      { label: 'Battery Life', value: '5-6 hours' },
      { label: 'Charging Case', value: '24 hours total' },
      { label: 'Driver Size', value: '10mm' },
      { label: 'Frequency Response', value: '20Hz - 20kHz' },
      { label: 'Water Resistance', value: 'IPX4' },
      { label: 'Bluetooth', value: '5.2' },
      { label: 'Weight', value: '4g per earbud' }
    ],
    'Neckband': [
      { label: 'Type', value: 'Neckband' },
      { label: 'Battery Life', value: '8-10 hours' },
      { label: 'Driver Size', value: '12mm' },
      { label: 'Frequency Response', value: '20Hz - 20kHz' },
      { label: 'Water Resistance', value: 'IPX5' },
      { label: 'Bluetooth', value: '5.1' },
      { label: 'Weight', value: '25g' },
      { label: 'Connector', value: 'Micro USB' }
    ],
    'Headphones': [
      { label: 'Type', value: 'Over-Ear' },
      { label: 'Battery Life', value: '30 hours' },
      { label: 'Driver Size', value: '40mm' },
      { label: 'Frequency Response', value: '20Hz - 20kHz' },
      { label: 'Impedance', value: '32 Ohms' },
      { label: 'Bluetooth', value: '5.0' },
      { label: 'Weight', value: '250g' },
      { label: 'Noise Cancellation', value: 'Active' }
    ],
    'Charger': [
      { label: 'Type', value: 'Fast Charger' },
      { label: 'Output', value: '65W' },
      { label: 'Input', value: 'AC 100-240V' },
      { label: 'Ports', value: '2x USB-C + 1x USB-A' },
      { label: 'Temperature Control', value: 'Yes' },
      { label: 'Compatibility', value: 'Universal' },
      { label: 'Warranty', value: '1 Year' },
      { label: 'Dimensions', value: '10cm x 8cm x 4cm' }
    ]
  };

  const specs = specifications[product.category] || specifications['Earpods'];

  const reviews = [
    { user: 'Rajesh Kumar', rating: 5, comment: 'Excellent product! Sound quality is amazing.', verified: true },
    { user: 'Priya Singh', rating: 4, comment: 'Good value for money. Battery lasts long.', verified: true },
    { user: 'Amit Patel', rating: 5, comment: 'Best purchase ever. Highly recommended!', verified: true },
    { user: 'Neha Sharma', rating: 4, comment: 'Great product but could be cheaper.', verified: false }
  ];

  const colors = ['Black', 'Silver', 'White', 'Blue'];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div className="product-details-page">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="back-btn"
        style={{
          marginTop: '20px',
          marginBottom: '30px',
          padding: '10px 20px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        ← Back to Products
      </button>

      {/* Main Product Section */}
      <div className="product-details-container">
        {/* Product Image */}
        <div className="product-image-section">
          <div className="main-image">
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '120px',
              marginBottom: '20px'
            }}>
              {product.icon}
            </div>
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  style={{
                    width: '70px',
                    height: '70px',
                    background: i === 1 ? 'var(--primary)' : '#f0f0f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: i === 1 ? '2px solid var(--primary)' : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="product-info-section">
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>{product.name}</h1>

          {/* Rating */}
          <div style={{ marginBottom: '15px' }}>
            <span style={{ color: 'var(--warning)', fontSize: '18px' }}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </span>
            <span style={{ marginLeft: '10px', fontSize: '16px', color: '#666' }}>
              {product.rating} (1,234 reviews)
            </span>
          </div>

          {/* Price Section */}
          <div className="price-section" style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--primary)' }}>
                ₹{product.price}
              </span>
              <span style={{ fontSize: '20px', textDecoration: 'line-through', color: '#999' }}>
                ₹{product.originalPrice}
              </span>
              <span style={{
                background: 'var(--warning)',
                color: 'var(--dark)',
                padding: '5px 10px',
                borderRadius: '5px',
                fontWeight: 'bold'
              }}>
                {discountPercentage}% OFF
              </span>
            </div>
            <p style={{ color: '#666', marginBottom: '0' }}>
              <i className="fas fa-truck"></i> Free shipping on this item
            </p>
          </div>

          {/* Color Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px', color: 'white' }}>
              Available Colors:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    padding: '8px 15px',
                    border: selectedColor === color ? '2px solid var(--primary)' : '1px solid #ddd',
                    borderRadius: '8px',
                    background: selectedColor === color ? 'var(--primary)' : 'white',
                    color: selectedColor === color ? 'white' : 'var(--dark)',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px', color: 'white' }}>
              Quantity:
            </label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                −
              </button>
              <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '40px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                +
              </button>
              <span style={{ marginLeft: '20px', color: '#666' }}>
                {quantity > 1 && `Subtotal: ₹${product.price * quantity}`}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button
              className="btn btn-primary"
              onClick={handleAddToCart}
              style={{ flex: 1, padding: '15px' }}
            >
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button
              className="btn btn-secondary"
              style={{ padding: '15px 30px' }}
            >
              <i className="fas fa-heart"></i> Wishlist
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{
            background: '#f0f0f0',
            padding: '15px',
            borderRadius: '8px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center', flex: 1, minWidth: '100px' }}>
              <i className="fas fa-shield-alt" style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '5px', display: 'block' }}></i>
              <small style={{ color: '#666' }}>Secure Payment</small>
            </div>
            <div style={{ textAlign: 'center', flex: 1, minWidth: '100px' }}>
              <i className="fas fa-undo" style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '5px', display: 'block' }}></i>
              <small style={{ color: '#666' }}>30-Day Returns</small>
            </div>
            <div style={{ textAlign: 'center', flex: 1, minWidth: '100px' }}>
              <i className="fas fa-headset" style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '5px', display: 'block' }}></i>
              <small style={{ color: '#666' }}>24/7 Support</small>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div style={{ marginTop: '50px' }}>
        <div style={{
          display: 'flex',
          gap: '20px',
          borderBottom: '2px solid #eee',
          marginBottom: '30px'
        }}>
          {['description', 'specifications', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '15px 20px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '3px solid var(--primary)' : 'none',
                color: activeTab === tab ? 'var(--primary)' : 'white',
                transition: 'all 0.3s'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Description Tab */}
        {activeTab === 'description' && (
          <div>
            <h3 style={{ marginBottom: '15px', color: 'white' }}>Product Description</h3>
            <p style={{ lineHeight: '1.8', color: 'white', marginBottom: '20px' }}>
              {product.description}
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid var(--primary)'
            }}>
              <h4 style={{ marginBottom: '10px', color: 'white' }}>Key Features:</h4>
              <ul style={{ color: 'white', lineHeight: '1.8' }}>
                <li>Premium sound quality with deep bass</li>
                <li>Long battery life for extended usage</li>
                <li>Comfortable fit for all-day wear</li>
                <li>Fast charging capability</li>
                <li>Water and dust resistant</li>
                <li>Compatible with all devices</li>
                <li>1-year manufacturer warranty</li>
              </ul>
            </div>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === 'specifications' && (
          <div>
            <h3 style={{ marginBottom: '20px' }}>Technical Specifications</h3>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} style={{
                    borderBottom: '1px solid #eee',
                    background: index % 2 === 0 ? '#fafafa' : 'white'
                  }}>
                    <td style={{ padding: '12px', fontWeight: 'bold', color: 'var(--primary)', minWidth: '200px' }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: '12px', color: '#666' }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px' }}>Customer Reviews</h3>
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--primary)' }}>
                      4.7
                    </div>
                    <div style={{ color: 'var(--warning)', marginBottom: '5px' }}>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <small style={{ color: '#666' }}>Based on 1,234 reviews</small>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[5, 4, 3, 2, 1].map(star => (
                      <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <span style={{ minWidth: '30px', fontSize: '12px' }}>{star} star</span>
                        <div style={{
                          height: '8px',
                          background: '#eee',
                          borderRadius: '4px',
                          flex: 1,
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            height: '100%',
                            background: 'var(--success)',
                            width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : 3}%`
                          }}></div>
                        </div>
                        <span style={{ minWidth: '40px', textAlign: 'right', fontSize: '12px', color: '#666' }}>
                          {star === 5 ? '700' : star === 4 ? '400' : star === 3 ? '100' : star === 2 ? '23' : '11'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              {reviews.map((review, index) => (
                <div key={index} style={{
                  padding: '15px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                    <div>
                      <strong>{review.user}</strong>
                      {review.verified && (
                        <span style={{ marginLeft: '10px', background: 'var(--success)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div style={{ color: 'var(--warning)' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" style={{ opacity: 0.3 }}></i>
                      ))}
                    </div>
                  </div>
                  <p style={{ color: '#666', margin: '0' }}>{review.comment}</p>
                </div>
              ))}

              <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                View All Reviews
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '25px' }}>Related Products</h2>
        <div className="products-grid">
          {relatedProducts.map(relProduct => (
            <div
              key={relProduct.id}
              onClick={() => navigate(`/product/${relProduct.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-card">
                <div className="product-image">
                  <span style={{ fontSize: '80px' }}>{relProduct.icon}</span>
                  <span className="discount-badge">
                    {Math.round(((relProduct.originalPrice - relProduct.price) / relProduct.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <div className="product-info">
                  <div className="product-name">{relProduct.name}</div>
                  <div className="product-description">{relProduct.description}</div>
                  <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span style={{ marginLeft: '5px' }}>({relProduct.rating})</span>
                  </div>
                  <div className="product-price">
                    <span className="original-price">₹{relProduct.originalPrice}</span>
                    <span className="current-price">₹{relProduct.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
