import {useContext, useState} from 'react';
import {UseCartContext} from '../../../context/CartContext';
import Router from 'next/router';

export default function MercadoPagoButton ({payerInfo}) {
    const {items} = useContext(UseCartContext);



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
        Router.push({
              pathname: preference.redirect,
        });

      }).catch(err => {
        //DISABLED BUTTON
        console.log("ERR",err);
      });    


    const handleAccept = (payerInfo) => {
        const order = {
            items:items,
            payer:payerInfo,
        }
        payMP(order);

        // var hasNumber = /\d/;   
        // // MODIFICAR
        // if(payerInfo.nombre === "" || payerInfo.apellido === "" || payerInfo.email === "" || payerInfo.phone === ""){
        //     // history.push('/dialog/formDialogError');
        // }else if ( hasNumber.test(payerInfo.nombre) || hasNumber.test(payerInfo.apellido)) {
        //     // history.push('/dialog/formDialogError');
        // } else if (!payerInfo.email.includes("@")) {
        //     // history.push('/dialog/formDialogError');
        // }else{
        //     payMP(order);
        //     // history.push('/dialog/endBuyDialog');
        // }
    }



    return(
        <button onClick={() => handleAccept(payerInfo)}>Finalizar Compra</button>
    )
}