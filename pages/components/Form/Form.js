import React,{useState, useContext,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {UseCartContext} from '../../../context/CartContext';
import Link from 'next/link';




export default function Form () {
    const [buyerInfo, setBuyerInfo] = useState({});

    const {saveBuy,order,} = useContext(UseCartContext);


    useEffect(() => {
        console.log(buyerInfo)
    }, [buyerInfo]);

    const handleNameData = (e) => {
        setBuyerInfo({...buyerInfo,nombre: e.target.value})
    }

    const handleSurnameData = (e) => {
        setBuyerInfo({...buyerInfo,apellido: e.target.value})
    }

    const handleEmailData = (e) => {
        setBuyerInfo({...buyerInfo,email: e.target.value})
    }

    const handlePhoneData = (e) => {
        setBuyerInfo({...buyerInfo,phone: e.target.value})
    }

    const handleCityData = (e) => {
        setBuyerInfo({...buyerInfo,ciudad: e.target.value})
    }

    const handleAddressData = (e) => {
        setBuyerInfo({...buyerInfo,direccion: e.target.value})
    }

    const handleAddressNumberData = (e) => {
        setBuyerInfo({...buyerInfo,numeroCasa: e.target.value})
    }

    const handlePostalCodeData = (e) => {
        setBuyerInfo({...buyerInfo,codigoPostal: e.target.value})
    }


    const handleAccept = () => {
        var hasNumber = /\d/;   
        // MODIFICAR
        if(buyerInfo.nombre === "" || buyerInfo.apellido === "" || buyerInfo.email === "" || buyerInfo.phone === ""){
            // history.push('/dialog/formDialogError');
        }else if ( hasNumber.test(buyerInfo.nombre) || hasNumber.test(buyerInfo.apellido)) {
            // history.push('/dialog/formDialogError');
        } else if (!buyerInfo.email.includes("@")) {
            // history.push('/dialog/formDialogError');
        }else{
            saveBuy(buyerInfo);
            // history.push('/dialog/endBuyDialog');
        }
    }

    return (
    <form className="form">
        <div className='form-input-title'>
            <h2>DATOS PERSONALES</h2>
        </div>
           
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="nameId"  placeholder="Nombre" type="input" onChange={handleNameData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="apellidoId"  placeholder="Apellido" type="input" onChange={handleSurnameData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="emailId"  placeholder="Email" type="input" onChange={handleEmailData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="numberId"  placeholder="Numero de telefono" type="input" onChange={handlePhoneData}/>
            
        <div className='form-input-title formtitle2'>
            <h2>DATOS DE ENVIO</h2>
        </div>    
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="ciudadId"  placeholder="Ciudad" type="input" onChange={handleCityData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="apellidoId"  placeholder="Direccion" type="input" onChange={handleAddressData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="emailId"  placeholder="Numero" type="input" onChange={handleAddressNumberData}/>
            <TextField className="form-input" size="medium" autoComplete="off"   color="secondary"  id="numberId"  placeholder="Codigo Postal" type="input" onChange={handlePostalCodeData}/>


        {/* MERCADO PAGO COMPRAR */}
        <button onClick={() => handleAccept()}>Finalizar Compra</button>
        <Link href="/Cart" className="linkStyle"><button>Cancelar</button></Link>

        </form>


)
        
}
    

