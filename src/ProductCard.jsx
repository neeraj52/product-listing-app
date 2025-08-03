import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h5>{product.title}</h5>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;