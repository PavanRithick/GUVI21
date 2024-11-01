import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">450 x 300</div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {inCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
