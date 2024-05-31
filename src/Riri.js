import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Victor(props) {
  const [discountPrice, setDiscountPrice] = useState(props.price);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setDiscountPrice(discountPrice * 0.5);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  

  return (
    <div className='ola'>
      <img src={props.image} alt={props.name} className='sam' />
      <h2 style={{ fontWeight: 'bolder' }}>{props.name}</h2>
      <h3>{props.description}</h3>
      <h4><strong>${props.price}</strong></h4>
      <p>Discount ${discountPrice}</p>
      <button onClick={clickHandler} className='btn btn-dark '>Discount </button>
      <h4>{count}</h4>
      <button onClick={increaseCount} className='ire'>Quantity to purchase</button>
    </div>
  );
}
