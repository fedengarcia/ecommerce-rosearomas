import Router from 'next/router';
import { useContext } from 'react';
import { UseCartContext } from '../../../context/CartContext';

export default function ({producto,type,amount}){
    const {addItem} = useContext(UseCartContext);
    
    const handleOnClick = () => {
        if(type === "none"){
            // PUSH MODAL
            Router.push({
                pathname: '/dialog',
                query: { keyword: 'SelectFraganciaDialog' },
            })
        }else{
            //AGREGAR AL CARRO
            console.log(producto);
            console.log(type);
            console.log(amount);

            addItem(producto);
        }
    }

    return(
        <button onClick={handleOnClick} className="add-cart-button">Agregar al carrito</button>
    )
}