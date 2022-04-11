import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { UseCartContext } from '../../../context/CartContext';

export default function ItemCart({producto}) {
    const [amount,setAmount] = useState(producto.quantity)

    const {getItemPrice} = useContext(UseCartContext);

    return(
        <div className="item-cart">

            <div className="grid-row">
                <div className='gridItem'><h3>{producto.Nombre}</h3></div>
                <div className='gridItem'><h3>{producto.type}</h3></div>
                
                <ItemCount productId= {producto.id} amount={amount} setAmount={setAmount} stock={producto.Stock}/>
                <div className='gridItem'><h3>${producto.Precio*producto.quantity}</h3></div>
            </div>
        </div>

        
    )
}