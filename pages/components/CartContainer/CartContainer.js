import { useEffect, useState,useContext } from "react";
import { UseCartContext } from "../../../context/CartContext";
import ItemCart from '../ItemCart/ItemCart';
import Router from "next/router";


export default function CartContainer () {
    const {getItems, getTotalPrice, clear} = useContext(UseCartContext);
    const itemsCart = getItems();

    const [vaciar,setVaciar]=useState(false)

    const handleClearCart = (event) => {
        setVaciar(!vaciar)
        if(event){
            clear()
        }
    }


    const handleConfirmBuy = () => {
        Router.push({ pathname: '/FinalizarCompra', query: { keyword: 'Todo' } })
    }

    
    return (<div className="cart-container">

            <div className="item-cart-container">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="gridItem"><h1>Nombre</h1></div>
                        <div className="gridItem"><h1>Fragancia</h1></div>
                        <div className="gridItem"><h1>Cantidad</h1></div>
                        <div className="gridItem"><h1>Precio</h1></div>
                    </div>
                </div>
                {itemsCart.map(producto => <ItemCart key={producto.id} producto={producto}/>)}
                <div className="resume-cart-container">
                    <div><p>TEXTO DONDE SE EXPLICA POR QUE EL AUMENTO DEL PRECIO POR EL ENVIO</p></div>
                    <div><h3>Total: ${getTotalPrice()}</h3></div>
                </div>
                <div className="cart-actions">
                    <button onClick={handleConfirmBuy}>Confirmar Compra</button>
                    <button onClick={()=>{handleClearCart(false)}}>Vaciar Carrito</button>
                    {vaciar?
                        <>
                            <div className="VaciarCarrito-container">
                                <div className="VaciarCarrito">
                                    <p className="title-vaciar">VACIAR CARRITO</p>
                                    <div className="button-vaciar-container">
                                        <p className="button-vaciar" onClick={()=>{handleClearCart(false)}}>CANCELAR</p>
                                        <p className="button-vaciar" onClick={()=>{handleClearCart(true)}}>ACEPTAR</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
            </div>
            
        </div>
    )
}