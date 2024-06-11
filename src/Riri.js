import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Victor(props) {
  const [discountPrice, setDiscountPrice] = useState(props.price);
  let [buttonClicked, setButtonClicked]=useState(true);
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setDiscountPrice(discountPrice * 0.5);
    setButtonClicked(false)
  };


  const increaseCount = () => {
    setCount(count + 1);
  };
  // const[oldprice, setoldPriceStyle]=TextDecoder()

  return (
   <>
    <div className='ola'>
      <img src={props.image} alt={props.name} className='sam' />
      <h2 style={{ fontWeight: 'bolder' }}>{props.name}</h2>
      <h3>{props.description}</h3>
      <h4 style={{textDecoration: buttonClicked? 'none' : 'line-through'}}><strong>${props.price}</strong></h4>
      <p  style={{display: buttonClicked? 'none' : 'inline-block'}}>Discount ${discountPrice}</p>
      
      {buttonClicked ?<button  className='btn btn-dark ' onClick={clickHandler}>Discount</button>:
      <button  className='btn btn-dark ' >buy now</button>}
      
      <h4>{count}</h4>
      <button onClick={increaseCount} className='btn btn-dark'>Quantity to purchase</button>
    </div>
    </> 
  );
}