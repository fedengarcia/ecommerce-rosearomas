import {useContext} from 'react';
import {UseCartContext} from '../../../context/CartContext';


export default function MercadoPagoButton ({payerInfo}) {
    const {saveBuy,items} = useContext(UseCartContext);

    console.log("ITEMS",items);
    console.log("----------------------")
    console.log("PAYER INFO", payerInfo);




    const handleAccept = () => {


        var hasNumber = /\d/;   
        // MODIFICAR
        if(payerInfo.nombre === "" || payerInfo.apellido === "" || payerInfo.email === "" || payerInfo.phone === ""){
            // history.push('/dialog/formDialogError');
        }else if ( hasNumber.test(payerInfo.nombre) || hasNumber.test(payerInfo.apellido)) {
            // history.push('/dialog/formDialogError');
        } else if (!payerInfo.email.includes("@")) {
            // history.push('/dialog/formDialogError');
        }else{
            saveBuy(payerInfo);
            // history.push('/dialog/endBuyDialog');
        }
    }



    return(
        <button onClick={() => handleAccept()}>Finalizar Compra</button>
    )
}