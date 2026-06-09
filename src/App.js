import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoSection from './components/PromoSection';
import SpinWheel from './components/SpinWheel';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notification, setNotification] = useState('');

  const productsData = [
    {
      id: 1,
      name: 'Wireless Earpods Pro',
      price: 4999,
      originalPrice: 7999,
      description: 'Premium wireless earpods with noise cancellation',
      category: 'Earpods',
      rating: 4.8,
      icon: '🎧'
    },
    {
      id: 2,
      name: 'Bluetooth Neckband',
      price: 1999,
      originalPrice: 3499,
      description: 'Comfortable neckband with 12-hour battery',
      category: 'Neckband',
      rating: 4.5,
      icon: '🎙️'
    },
    {
      id: 3,
      name: 'Over-Ear Headphones',
      price: 5999,
      originalPrice: 9999,
      description: 'Studio quality sound with deep bass',
      category: 'Headphones',
      rating: 4.7,
      icon: '🎵'
    },
    {
      id: 4,
      name: 'Fast Charger 65W',
      price: 1499,
      originalPrice: 2499,
      description: 'Quick charge for all devices',
      category: 'Charger',
      rating: 4.6,
      icon: '🔌'
    },
    {
      id: 5,
      name: 'Gaming Earpods',
      price: 3999,
      originalPrice: 6999,
      description: 'Low latency gaming earpods with RGB',
      category: 'Earpods',
      rating: 4.9,
      icon: '🎮'
    },
    {
      id: 6,
      name: 'Portable Charger 20000mAh',
      price: 1299,
      originalPrice: 1999,
      description: 'Fast charging power bank',
      category: 'Charger',
      rating: 4.4,
      icon: '⚡'
    },
    {
      id: 7,
      name: 'Sports Neckband',
      price: 2499,
      originalPrice: 4499,
      description: 'Water-resistant sports neckband',
      category: 'Neckband',
      rating: 4.6,
      icon: '⛹️'
    },
    {
      id: 8,
      name: 'Studio Headphones',
      price: 7999,
      originalPrice: 12999,
      description: 'Professional audio equipment',
      category: 'Headphones',
      rating: 4.9,
      icon: '🎚️'
    }
  ];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Router>
      <div className="app">
        <Header cartCount={cart.length} onCartClick={() => setCartOpen(!cartOpen)} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <Hero />
                  <PromoSection />
                  <SpinWheel onDiscount={() => showNotification('Congratulations! You won 20% discount! 🎉')} />
                  <ProductList products={productsData} onAddToCart={addToCart} />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <div className="container">
                  <ProductDetails
                    products={productsData}
                    onAddToCart={addToCart}
                    onDiscount={() => showNotification('Congratulations! You won 20% discount! 🎉')}
                  />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
        <CartSidebar
          isOpen={cartOpen}
          cartItems={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          total={getCartTotal()}
        />
        {notification && <div className="notification">{notification}</div>}
      </div>
    </Router>
  );
}

export default App;
