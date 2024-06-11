// import Mami from "./page"
import { Victor } from './Riri'
import Tolu from './brownbag.jpg';
import olu from './goldshoe.jpg';
import lolu from './silver.jpg';
import { Kemi } from './kimi';

export function Mady() {

    const ProductDetails = {
        title: [' Brown bag', 'Gold purse', 'Silver necklace'],
        productimage: [Tolu, olu, lolu],
        description: ['It is the latest in town', 'fashionable ,elegant', 'Fancy and beautiful'],
        price: [500, 1000, 1500],
    }
    // const food=['rice','beans' ,'garri']
    //       const drink=['apple juice', 'coke' ,'fanta']
    //         const puttogether=[...food,...drink]

    return (
        <div>
            {/* <Mami/> */}
            <h1>Welcome to react class</h1>
            <div className="App ">
                {ProductDetails.title.map((x, index) => (
                    <div key={index} className='aba col-sm-3'>
                        <Victor
                            name={ProductDetails.title[index]}
                            image={ProductDetails.productimage[index]}
                            description={ProductDetails.description[index]}
                            price={ProductDetails.price[index]}
                        />
                        <Kemi />
                    </div>
                ))}
            </div>

            {/* <h1>{puttogether}</h1>
            food.push('spagh') */}

        </div>
    )
}