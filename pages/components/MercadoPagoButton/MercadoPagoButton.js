import {useContext, useState} from 'react';
import {UseCartContext} from '../../../context/CartContext';
import { useRouter } from 'next/router';
import Loader from '../Loader/Loader';

export default function MercadoPagoButton ({payerInfo, formValidado,payerInfoEspecial}) {
    const {items} = useContext(UseCartContext);
    const router = useRouter();

    const [mensaje,setMensaje]=useState(false)


    const payMP = (newOrder,payerInfoEspecial) => fetch('http://localhost:3000/api/create_preference', {
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
        //ENVIO DE EMAIL CONFIRMANDO COMPRA
        sendEmail(payerInfoEspecial)

        //REDIRECCION A CHECKOUTPRO
        // router.replace(preference.redirect);


      }).catch(err => {
        console.log("ERR",err);
      });    


    const sendEmail = (payerInfoEspecial) => fetch('http://localhost:3000/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payerInfoEspecial)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
        }
    })
    

    const handleAccept = (payerInfo,payerInfoEspecial) => {
        const order = {
            items:items,
            payer:payerInfo,
        }
        payMP(order,payerInfoEspecial);
    }


    return(
        <>
          {formValidado ? <button onClick={() => handleAccept(setMensaje(true),payerInfo,payerInfoEspecial)} className="boton-validar">FINALIZAR COMPRA</button> 
          : <button onClick={() => handleAccept(payerInfo,payerInfoEspecial)} disabled className='boton-validar-sinHover'>Finalizar Compra</button>}
          {/* {mensaje?<><Loader></Loader></>:<></>} */}
        </>
    )
}