import { useEffect, useState,useContext } from "react";
import { UseCartContext } from "../../../context/CartContext";
import ItemCart from '../ItemCart/ItemCart';



export default function CartContainer () {
    const [itemsCart, setitemsCart] = useState(undefined);
    const {getItems} = useContext(UseCartContext);

    useEffect(() => {
        setitemsCart(getItems());
        console.log(itemsCart);
    }, []);



    return (<div className="cart-container">
            <div className="item-cart-container">
                {itemsCart && itemsCart.map(producto => <ItemCart key={producto.id} producto={producto}/>)}
            </div>
        </div>
    )
}