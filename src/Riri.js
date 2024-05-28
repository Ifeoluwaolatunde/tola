 import './App.css'
 export function Ife(){
   return(
   <div>
   <h1 style={{fontFamily:'pristina',color:'yellow',fontWeight:'bolder'}}>Exclusive Products Store</h1>
   </div>
   )
}

 let Emma = (props) =>{
   
    return(
        <div className='ola'>
           <h2>We have {props.name}</h2>
           <img scr={props.image} alt='fine' />
           <h3>{props.description}</h3>
           <h4> <strong>{props.price}</strong></h4>
        </div>
    )
 }

 export default Emma;