import './App.css';
import Tolu from './sisi.png';
import olu from './goldpurse.jpg';
import lolu from './silvernecklace.jpg';
import Emma from './Riri.js';




const ProductDetails={
  title:['Gucci', 'channel' , 'liousvitton'],
  productimage:[Tolu, olu ,lolu],     
  description:['light brown bag', 'Gold purse' ,'Silver necklace'],
  price:['$500' ,' $1000' ,'$1500'],
}  
function App() {
  
    
  return (
  
    <div className="App col-sm-4">
     
      <div className='aba'>
          <Emma 
          name={ProductDetails.title[0]} 
          image={Tolu}
          description={ProductDetails.description[0]}
          price={ProductDetails.price[0]}
          />
        </div>

      <div className='ada'>
        <Emma 
          name={ProductDetails.title[1]}
          image={ProductDetails.productimage[1]}
          description={ProductDetails.description[1]} 
          price={ProductDetails.price[1]}/>
      </div>

      <div className='aka'>
        <Emma
         name={ProductDetails.title[2]} 
         image={ProductDetails.productimage[2]}
         description={ProductDetails.description[2]} 
         price={ProductDetails.price[2]}/>
        </div>
      
        {/* <img src={qan} className="App-logo" alt="logo" />
        <p>
          you can freely edit ur page
        </p>
       <h4>
          React for you
          </h4> */}
  
    </div>
  );
}

export default App;
