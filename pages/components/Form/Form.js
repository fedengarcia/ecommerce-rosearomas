import React,{useState, useContext,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {UseCartContext} from '../../../context/CartContext';
import MercadoPagoButton from '../MercadoPagoButton/MercadoPagoButton';
import Link from 'next/link';




export default function Form () {
    const [payerInfo, setPayerInfo] = useState({});


    const handleNameData = (e) => {
        setPayerInfo({...payerInfo,nombre: e.target.value})
    }

    const handleSurnameData = (e) => {
        setPayerInfo({...payerInfo,apellido: e.target.value})
    }

    const handleEmailData = (e) => {
        setPayerInfo({...payerInfo,email: e.target.value})
    }

    const handlePhoneData = (e) => {
        setPayerInfo({...payerInfo,phone: e.target.value})
    }

    const handleCityData = (e) => {
        setPayerInfo({...payerInfo,ciudad: e.target.value})
    }

    const handleAddressData = (e) => {
        setPayerInfo({...payerInfo,direccion: e.target.value})
    }

    const handleAddressNumberData = (e) => {
        setPayerInfo({...payerInfo,numeroCasa: e.target.value})
    }

    const handlePostalCodeData = (e) => {
        setPayerInfo({...payerInfo,codigoPostal: e.target.value})
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
        <MercadoPagoButton payerInfo={payerInfo} />
        <Link href="/Cart" className="linkStyle"><button>Cancelar</button></Link>

        </form>


)
        
}
    

