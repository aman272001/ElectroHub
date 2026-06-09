import React from 'react';

function CartSidebar({ isOpen, cartItems, onClose, onRemove, onUpdateQuantity, total }) {
  return (
    <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-cart" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-bag"></i>
            <h3>Your cart is empty</h3>
            <p>Add some amazing products to get started!</p>
          </div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <span style={{ fontSize: '30px' }}>{item.icon}</span>
              </div>
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">₹{item.price}</div>
                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    style={{
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginLeft: 'auto',
                      fontSize: '12px'
                    }}
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-total">
          <div className="total-amount">₹{total}</div>
          <button className="checkout-btn">
            <i className="fas fa-credit-card"></i> Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
