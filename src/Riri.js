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
   const[button,setButton]=useState(false)
  

  return (
   <>
    <div className='ola'>
      <img src={props.image} alt={props.name} className='sam' />
      <h2 style={{ fontWeight: 'bolder' }}>{props.name}</h2>
      <h3>{props.description}</h3>
      <h4><strong>${props.price}</strong></h4>
      <p>Discount ${discountPrice}</p>
      <button  className='btn btn-dark '
         onClick={
            ()=>{
            clickHandler()
            setButton(!button)
            }
         }
      >
         {button ? 'Buy': 'Discount'}
      </button>
      <h4>{count}</h4>
      <button onClick={increaseCount} className='btn btn-dark'>Quantity to purchase</button>
    </div>
    </> 
  );
}