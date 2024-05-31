import './App.css';
import {Victor} from  './Riri'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bady} from './lola';
import Tolu from './brownbag.jpg';
import olu from './goldshoe.jpg';
import lolu from './silver.jpg';
import {Mady} from './bass';





const ProductDetails={
  title:['Gucci', 'channel' , 'LV'],
  productimage:[Tolu, olu ,lolu],     
  description:['light brown bag', 'Gold purse' ,'Silver necklace'],
  price:[500 , 1000 ,1500],
}  
function App() {
  
    const tunde=true;
  return (
   
    <div>
     <Bady sola={tunde}/>
      <div className="App ">
        {ProductDetails.title.map((x, index) => (
          <div key={index} className='aba col-sm-3'>
            <Victor
              name={ProductDetails.title[index]}
              image={ProductDetails.productimage[index]}
              description={ProductDetails.description[index]}
              price={ProductDetails.price[index]}
            />
          </div>
        ))}
      </div>

      <Mady/>

      
     
    </div>
  );
}

export default App;
