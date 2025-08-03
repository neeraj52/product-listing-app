import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <h5>Cart</h5>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;