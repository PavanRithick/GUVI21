import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Fancy Product', price: '$40.00' },
    { id: 2, name: 'Special Item', price: '$18.00' },
    { id: 3, name: 'Sale Item', price: '$25.00' },
    { id: 4, name: 'Popular Item', price: '$50.00' },
    { id: 5, name: 'Featured Item', price: '$35.00' },
    { id: 6, name: 'Limited Edition', price: '$60.00' },
    { id: 7, name: 'New Arrival', price: '$30.00' },
    { id: 8, name: 'Top Rated', price: '$45.00' },
    { id: 9, name: 'Best Seller', price: '$55.00' },
    { id: 10, name: 'Exclusive', price: '$70.00' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={toggleCart} />
      <header className="hero">
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
      {isCartOpen && <CartModal cart={cart} onClose={toggleCart} />}
    </div>
  );
};

export default App;
