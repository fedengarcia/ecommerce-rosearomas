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


      const sendEmail = (payerInfoEspecial) => {
        // e.preventDefault();
        emailjs.send('service_jb6mijg', 'template_30x548n', payerInfoEspecial,'iAGffvAUjlmg0kSrt')
            .then(function(response) {
            console.log(payerInfoEspecial)
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
    };
    

    const handleAccept = (payerInfo,payerInfoEspecial) => {
        if(payerInfoEspecial.metodo_pago === "mercadopago"){
          const orderMp = {
            items:items,
            payer:payerInfo,
        }
          payMP(orderMp,payerInfoEspecial);
        }else{
          const orderEfectivo = {
            items:items,
            payer:payerInfoEspecial,
        }
          sendEmail(orderEfectivo);
        }
    }


    return(
        <>
          {formValidado ? <button onClick={() => handleAccept(setMensaje(true),payerInfo,payerInfoEspecial)} className="boton-validar">FINALIZAR COMPRA</button> 
          : <button onClick={() => handleAccept(payerInfo,payerInfoEspecial)} disabled className='boton-validar-sinHover'>Finalizar Compra</button>}
          {/* {mensaje?<><Loader></Loader></>:<></>} */}
        </>
    )
}