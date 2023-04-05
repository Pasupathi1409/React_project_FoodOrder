import React, { useState } from "react";
import './FoodOrder.css';

const FoodOrder = () => {
  const [items, setItems] = useState([
    {
      name: "Burger",
      price: 100,
      image: "https://th.bing.com/th/id/OIP.lJzNXObVBwZTIaJVMxR5tQHaGH?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Pizza",
      price: 120,
      image: "https://th.bing.com/th/id/OIP.B_eq1B6UaudZuq7qL1xWkAHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Sandwitch",
      price: 80,
      image: "https://th.bing.com/th/id/OIP.jgIpm5pZfAOt4INp-UKV5QHaGe?w=227&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Food Ordering Website</h1>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.name} - ₹{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
            <p className="total-price">Total: ₹{totalPrice}</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default FoodOrder;
