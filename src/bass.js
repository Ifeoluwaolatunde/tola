
 export function Mady(){
    const food=['rice','beans' ,'garri']
          const drink=['apple juice', 'coke' ,'fanta']
            const puttogether=[...food,...drink]
            
    return(
        <div>
            <h1>{puttogether}</h1>
            food.push('spagh')

        </div>
    )
}