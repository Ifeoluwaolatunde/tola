import React,{useState} from 'react';
 import './App.css';

 import 'bootstrap/dist/css/bootstrap.min.css';

  export function Victor(props){
      let [Discountprice, setdiscountprice]=useState(props.price);
      let clickHandler=()=>{
         setdiscountprice(Discountprice*0.5)
      };
      
      return(
         <div className='ola'>
            <img src={props.image} alt={props.name} className='sam' />
            <h2>We have {props.name}</h2>
            <h3>{props.description}</h3>
            <h4> <strong>${props.price}</strong></h4>
            <p>Discount {Discountprice}</p>
            <button onClick={clickHandler} className='btn btn-dark '>Discount <i class="'bi bi-emoji-smile"></i></button>
         </div>
      );
   }
 
