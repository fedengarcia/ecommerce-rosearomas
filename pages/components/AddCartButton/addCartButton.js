import Router from 'next/router';
import { useContext } from 'react';
import { UseCartContext } from '../../../context/CartContext';
import { showNotification as show} from '../../helpers/helpers';

export default function ({producto,type,amount,setShowNotification}){
    const {addItem} = useContext(UseCartContext);
    
    const handleOnClick = () => {
        if(type === "none"){
            // PUSH MODAL
            // Router.push({
            //     pathname: '/dialog',
            //     query: { keyword: 'SelectFraganciaDialog' },
            // })
            show(setShowNotification)
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