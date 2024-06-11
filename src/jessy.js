// import { useState } from 'react';
import './App.css'

function Laide(){
    // const[emailEntered ,setemailEntered]=useState('')
    // const[passEntered ,setpassEntered]=useState('')
    function formHandler(event){
        event.preventDefault();
        const fogo=new FormData(event.target)
        const myemm=fogo.get('email')
        const pag=fogo.get('password')
        console.log(myemm);
        console.log(pag);
    // }
    // function emailHandler(event){
    //    setemailEntered(event.target.value);
      
    // }
    // function passHandler(event){
    //     setpassEntered(event.target.value);
        
      }
    return(
        <>
        <form className="josh" onSubmit={formHandler}>
            <h2>Supplying Form</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                  name="email"
                //   onChange={emailHandler}
                //   value={emailEntered}
                  
                  />
            </div><br />
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                 name="password"
                //  onChange={passHandler}
                //  value={passEntered}
                 />
            </div>
            <button type='submit'>Submit</button>
        </form>
        
        </>
    )
 }
export default Laide