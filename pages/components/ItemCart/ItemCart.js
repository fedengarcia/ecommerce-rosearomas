import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


export default function ItemCart({producto}) {
    const [amount,setAmount] = useState(producto.quantity)
    console.log(producto)


    return(
        <div className="item-cart">

            <div className="grid-row">
                <div className='gridItem'><h3>{producto.Nombre}</h3></div>
                <div className='gridItem'><h3>{producto.type}</h3></div>
                
                <ItemCount amount={amount} setAmount={setAmount} stock={producto.Stock}/>

            </div>
        </div>

        
    )
}