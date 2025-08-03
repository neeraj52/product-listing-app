import React from 'react';
import ProductList from './ProductList';
import CartProvider from './CartContext';
import Cart from './Cart';
import './App.css';

function App() {

  return (
    <CartProvider>
      <div className="app">
        <header className="header">Shopping Cart</header>
        <div className="main">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}

export default App
