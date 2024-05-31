export function Bady({sola}){
   if(sola){ 
     return( //sola?<h1>welcome guys</h1>:<h1>pls log in</h1>
        
        <div style={{backgroundColor:'white',textAlign:'center',fontFamily:'cursive'}}>
            <h1>Welcome to Luxury Store</h1>
        </div>
   )
  }else{
    return(
        <div style={{backgroundColor:'white',textAlign:'center'}}>
          <h2>Pls log in</h2>
        </div>
    )
  }
}