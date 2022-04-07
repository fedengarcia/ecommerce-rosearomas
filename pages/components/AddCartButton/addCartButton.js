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
            //CAMBIAR MODIFICAR LOS NOMBRES DE LA BD PARA QUE EL PARSEO DE DATOS CON MP SEA FACIL
            addItem({
                ...producto,
                quantity: amount
            });
        }
    }

    return(
        <button onClick={handleOnClick} className="add-cart-button">Agregar al carrito</button>
    )
}