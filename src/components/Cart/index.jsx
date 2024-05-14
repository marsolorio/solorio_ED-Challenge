import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className='CartContainer'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className='CartItem'>
            <img src={item.image} alt={item.title} className='CartItemImage' />
            <div className='CartItemDetails'>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export { Cart };
