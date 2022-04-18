import {useContext, useState} from 'react';
import {UseCartContext} from '../../../context/CartContext';
import { useRouter } from 'next/router';
import Loader from '../Loader/Loader';

export default function MercadoPagoButton ({payerInfo, formValidado}) {
    const {items} = useContext(UseCartContext);
    const router = useRouter();

    const [mensaje,setMensaje]=useState(false)


    const payMP = (newOrder) => fetch('http://localhost:3000/api/create_preference', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newOrder) // body data type must match "Content-Type" header
      }).then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(preference) {
        console.log("PREFERENCE ID DE PAGO DE MP ---->", preference.id);
        console.log("RUTA DE REDIRECCION AL PAGO DE MP ----->",preference.redirect)
  
        //REDIRECCION A CHECKOUTPRO
        router.replace(preference.redirect);

      }).catch(err => {
        console.log("ERR",err);
      });    


    const handleAccept = (payerInfo) => {
        const order = {
            items:items,
            payer:payerInfo,
        }
        payMP(order);
    }


    return(
        <>
          {formValidado ? <button onClick={() => handleAccept(setMensaje(true),payerInfo)} className="boton-validar">FINALIZAR COMPRA</button> : <button onClick={() => handleAccept(payerInfo)} disabled className='boton-validar-sinHover'>Finalizar Compra</button>}
          {mensaje?<><Loader></Loader></>:<></>}
        </>
    )
}