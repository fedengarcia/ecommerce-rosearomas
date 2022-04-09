import { useEffect, useState,useContext } from "react";
import { UseCartContext } from "../../../context/CartContext";
import ItemCart from '../ItemCart/ItemCart';



export default function CartContainer () {
    const {getItems, getTotalPrice, clear} = useContext(UseCartContext);
    const itemsCart = getItems();
 

    const handleClearCart = () => {
        clear();
    }

    return (<div className="cart-container">

            <div className="item-cart-container">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="gridItem"><h1>Nombre</h1></div>
                        <div className="gridItem"><h1>Fragancia</h1></div>
                        <div className="gridItem"><h1>Cantidad</h1></div>
                    </div>
                </div>
                {itemsCart.map(producto => <ItemCart key={producto.id} producto={producto}/>)}
                <div className="">
                    <div><h3>Total: ${getTotalPrice()}</h3></div>
                </div>
                <div className="cart-actions">
                    <button>Confirmar Compra</button>
                    <button onClick={handleClearCart}>Vaciar Carrito</button>
                </div>
            </div>
            
        </div>
    )
}