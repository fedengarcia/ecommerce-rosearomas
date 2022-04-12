import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { UseCartContext } from '../../../context/CartContext';
import Image from 'next/image'
import tacho from "../../../public/icons8-basura-96.png"

export default function ItemCart({producto}) {
    const {removeItem} = useContext(UseCartContext);


    const [amount,setAmount] = useState(producto.quantity)
    const [borrar,setBorrar]=useState(false)

    const handleClearCart = (event,id) => {
        setBorrar(!borrar)
        if(event){
            removeItem(id)
        }
    }

    const {getItemPrice} = useContext(UseCartContext);

    return(
        <div className="item-cart">

            <div className="grid-row">
                <div className='gridItem titulo-cart'><h3>{producto.Nombre}</h3></div>
                <div className='gridItem fragancia-cart'><h3>{producto.type}</h3></div>
                
                <ItemCount productId= {producto.id} amount={amount} setAmount={setAmount} stock={producto.Stock}/>
                <div className='gridItem precio-item-cart'><h3>${producto.Precio*producto.quantity}</h3></div>
            </div>
            <div className='borrar-item' onClick={()=>{setBorrar(!borrar)}}>
                <Image src={tacho} width={96} height={96}/>
            </div>
            {borrar?
                <>
                    <div className="VaciarCarrito-container">
                        <div className="VaciarCarrito">
                            <p className="title-vaciar">BORRAR PRODUCTO</p>
                            <div className="button-vaciar-container">
                                <p className="button-vaciar" onClick={()=>{handleClearCart(false,producto.id)}}>CANCELAR</p>
                                <p className="button-vaciar" onClick={()=>{handleClearCart(true,producto.id)}}>ACEPTAR</p>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                </>
            }
        </div>
    )
}